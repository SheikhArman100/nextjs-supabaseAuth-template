import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.jsx";
import FormForgetPassword from "./FormForgetPassword.js";
import SupabaseServer from "@/lib/supabase/server.js";


const ForgetPassword = async() => {
    const supabase=SupabaseServer()
    const { data } = await (await supabase).auth.getUser()
    if (data?.user) {
      redirect('/')
    }
  return (
    <section className="w-full flex-1 flex items-center justify-center px-8 lg:px-[2rem] xl:px-[4rem]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Forget Password</CardTitle>
          <CardDescription>Request a password change link</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <FormForgetPassword/>
        </CardContent>
      </Card>
    </section>
  );
};

export default ForgetPassword;
