"use client";
import { Button } from "./ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ToastAction } from "./ui/toast";
import { Toaster } from "./ui/toaster";

const Landing = () => {
  const toast = useToast();
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked");
    toast.toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
  };
  return (
    <div>
      <Toaster />
      <div className="my-5">
        <Card className="w-[350px] lg:w-[500px]">
          <CardHeader>
            <CardTitle>Create your vault</CardTitle>
            <CardDescription>
              We need an unique username to create your vault
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter your email" type="email" />
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button
              className="cursor-pointer"
              onClick={handleOnClick}
              disabled={false}
            >
              Check Availability
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default Landing;
