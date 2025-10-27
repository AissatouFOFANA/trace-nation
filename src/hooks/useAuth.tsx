import { useState, useEffect } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';

export type UserRole = 'admin' | 'superadmin' | 'citoyen';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<UserRole | null>(null);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          // Fetch user role
          setTimeout(async () => {
            const { data } = await supabase
              .from('user_roles')
              .select('role')
              .eq('user_id', session.user.id)
              .single();
            
            // Convertir le rôle 'administration' en 'superadmin' pour l'interface utilisateur
            const role = data?.role === 'administration' ? 'superadmin' : data?.role;
            setRole(role as UserRole || 'citoyen');
          }, 0);
        } else {
          setRole(null);
        }
        
        setLoading(false);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      
      if (session?.user) {
        setTimeout(async () => {
          const { data } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', session.user.id)
            .single();
          
          // Convertir le rôle 'administration' en 'superadmin' pour l'interface utilisateur
          const role = data?.role === 'administration' ? 'superadmin' : data?.role;
          setRole(role as UserRole || 'citoyen');
          setLoading(false);
        }, 0);
      } else {
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, fullName: string) => {
    const redirectUrl = `${window.location.origin}/`;
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: redirectUrl,
        data: {
          full_name: fullName,
        }
      }
    });
    
    return { error };
  };

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    return { error };
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  };

  const updateUser = async ({ email, password, data }: { email?: string; password?: string; data?: any }) => {
    if (!user) return { error: new Error('Aucun utilisateur connecté') };
    
    try {
      let updateData: any = {};
      
      if (email) updateData.email = email;
      if (password) updateData.password = password;
      if (data) updateData.data = data;
      
      const { data: updatedUser, error } = await supabase.auth.updateUser(updateData);
      
      if (error) throw error;
      
      // Mise à jour du rôle si nécessaire
      if (data?.role) {
        await supabase
          .from('user_roles')
          .upsert(
            { user_id: user.id, role: data.role },
            { onConflict: 'user_id' }
          );
        
        setRole(data.role);
      }
      
      return { user: updatedUser, error: null };
    } catch (error) {
      console.error('Error updating user:', error);
      return { user: null, error };
    }
  };

  return {
    user,
    session,
    loading,
    role,
    signUp,
    signIn,
    signOut,
    updateUser,
  };
};
