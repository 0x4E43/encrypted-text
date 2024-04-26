"use client";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";

const Landing = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Welcome to Vault</h1>
        <p className="text-lg text-gray-500">
          A secure place to store your passwords
        </p>
      </div>

      <div className="my-5">
        <Card className="w-[350px] lg:w-[500px]">
          <CardHeader>
            <CardTitle>Create your vault</CardTitle>
            <CardDescription>
              We need a unique username to create your vault
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input placeholder="Enter your email" type="email" />
          </CardContent>
          <CardFooter>
            <Button className="" onClick={() => console.log("Button Clicked")}>
              Check Availability
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
export default Landing;
