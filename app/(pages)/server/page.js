import SupabaseServer from "@/lib/supabase/server.js";

const Server = async () => {
  const supabase = SupabaseServer();
  

  return <div>ServerPage</div>;
};

export default Server;
