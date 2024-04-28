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
import { useState } from "react";
import {
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialog,
} from "./ui/alert-dialog";

const Landing = () => {
  const [isSiteAvailable, setIsSiteAvailable] = useState(false);
  const toast = useToast();
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked");
    setIsSiteAvailable(true);
    toast.toast({
      title: "Scheduled: Catch up ",
      description: "Friday, February 10, 2023 at 5:57 PM",
      action: <ToastAction altText="Goto schedule to undo">Undo</ToastAction>,
    });
    <AlertDialogTrigger asChild></AlertDialogTrigger>;
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
      <AlertDialog open={isSiteAvailable} onOpenChange={setIsSiteAvailable}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
export default Landing;
