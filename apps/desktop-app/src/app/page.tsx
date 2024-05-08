import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>
              Projects currently in progress or backlog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">12</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Completed Tasks</CardTitle>
            <CardDescription>
              Tasks that have been marked as completed.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">78</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Overdue Tasks</CardTitle>
            <CardDescription>
              Tasks that have missed their due date.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="text-4xl font-bold">5</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
