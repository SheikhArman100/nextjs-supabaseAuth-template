import { Button } from "@/components/ui/button.jsx";
import { Input } from "@/components/ui/input.jsx";
import { Label } from "@/components/ui/label.jsx";
import React from "react";

const FormForgetPassword = () => {
  return (
    <form className="flex flex-col gap-y-3">
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input
          //   {...register("email")}
          type="email"
          id="email"
          placeholder="name@gmail.com"
        />
        {/* {errors.email?.message && (
                  <p className="text-xs font-semibold text-red-700 mt-1">
                    *{errors.email?.message}
                  </p>
                )} */}
      </div>
      <Button className="grid w-full  items-center">
        <p>Confirm</p>
      </Button>
    </form>
  );
};

export default FormForgetPassword;
