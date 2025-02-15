import { TaskForm } from "@/components/taskform";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="m-24 -mt-16 ">
      <CardHeader className="w-full">
        <CardTitle className="text-4xl flex items-center justify-center">Next ToDo Project</CardTitle>
      </CardHeader>

      <CardContent className="w-full flex flex-col items-center justify-center">
        <TaskForm />
      </CardContent>
    </Card>
  );
}
