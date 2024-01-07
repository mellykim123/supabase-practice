import React from "react";
import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const SupabaseProvider = ({ children }) => {
  const url = process.env.REACT_APP_PUBLIC_SUPABASE_URL || "";
  const key = process.env.REACT_APP_PUBLIC_SUPABASE_ANON_KEY || "";
  const supabaseClient = createClient(url, key);

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
};

export default SupabaseProvider;
