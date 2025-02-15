import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function TaskForm() {
  return (
    <form className="flex w-full max-w-4xl items-center space-x-2">
        <Input type="text" placeholder="Estudar javascript..." />
        <Button type="submit">Adicionar Tarefa</Button>
    </form>
  )
}