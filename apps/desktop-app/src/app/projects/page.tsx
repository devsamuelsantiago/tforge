import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg md:text-2xl">Projects</h1>
        <Button className="ml-auto" size="sm">
          New Project
        </Button>
      </div>
      <div className="border shadow-sm rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Assigned To</TableHead>
              <TableHead>Tasks</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <Link className="hover:underline" href="#">
                  Website Redesign
                </Link>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  variant="outline"
                >
                  In Progress
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                  variant="outline"
                >
                  High
                </Badge>
              </TableCell>
              <TableCell>May 15, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span>John Doe</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge
                    className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    variant="outline"
                  >
                    12 Tasks
                  </Badge>
                  <Button size="icon" variant="ghost"></Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Link className="hover:underline" href="#">
                  Mobile App Development
                </Link>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                  variant="outline"
                >
                  Backlog
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                  variant="outline"
                >
                  High
                </Badge>
              </TableCell>
              <TableCell>June 30, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span>Jane Smith</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge
                    className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    variant="outline"
                  >
                    8 Tasks
                  </Badge>
                  <Button size="icon" variant="ghost"></Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Link className="hover:underline" href="#">
                  CRM System Implementation
                </Link>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  variant="outline"
                >
                  In Progress
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                  variant="outline"
                >
                  Critical
                </Badge>
              </TableCell>
              <TableCell>July 1, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span>Michael Johnson</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge
                    className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    variant="outline"
                  >
                    20 Tasks
                  </Badge>
                  <Button size="icon" variant="ghost"></Button>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <Link className="hover:underline" href="#">
                  Marketing Campaign Planning
                </Link>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                  variant="outline"
                >
                  On Hold
                </Badge>
              </TableCell>
              <TableCell>
                <Badge
                  className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
                  variant="outline"
                >
                  Low
                </Badge>
              </TableCell>
              <TableCell>August 15, 2024</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    alt="Avatar"
                    className="rounded-full"
                    height="32"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width="32"
                  />
                  <span>Sarah Lee</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Badge
                    className="bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
                    variant="outline"
                  >
                    5 Tasks
                  </Badge>
                  <Button size="icon" variant="ghost"></Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      
    </main>
  );
}
