import { Header } from "@/components/header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-30">
        <Card className=" w-full flex flex-col">
          <CardHeader>
            <CardTitle>Your Tasks</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter >
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
