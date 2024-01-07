import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
export const Login = () => {
  const supabaseClient = useSupabaseClient();
  return (
    <div className="h-full flex justify-center items-center">
      <Auth
        supabaseClient={supabaseClient}
        appearance={{
          theme: ThemeSupa,
          style: { container: { width: "300px" } },
        }}
        providers={["kakao", "google"]}
        localization={{}}
      />
    </div>
  );
};
