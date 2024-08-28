import { Button } from "@/components/ui/button";
import { UpdateEmployeeDialog } from "../update-dialog";
import { Icons } from "@/components/icons";
import { useEmployees } from "@/hooks/get-employees";

export function ListOfEmployees() {
  const { data, isLoading, error } = useEmployees();

  if (isLoading) {
    return (
      <div className="text-center p-4">
        <Icons.spinner className="h-10 w-10 animate-spin mr-2" />
        <p>Loading employees...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4 text-red-500">
        <p>Error fetching employees: {error.message}</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="text-center p-4">
        <p>No Employees Found</p>
      </div>
    );
  }
  return (
    <div className="dark:bg-inherit bg-white mx-2 rounded-sm">
        {data.map((employee, index) => {
          console.log(employee);
          return (
            <div
              className=" grid grid-cols-6 rounded-sm p-3 align-middle font-normal"
              key={index}
            >
              <h1>{employee.firstname}</h1>
              <h1>{employee.lastname}</h1>
              <h1>{employee.email}</h1>
              <h1>{employee.salary}</h1>

              <div className="flex gap-2 items-center">
                <Button variant="outline">
                  <Icons.trash className="h-4 w-4 mr-2" />
                  Delete
                </Button>
                <UpdateEmployeeDialog data={employee} />
              </div>
            </div>
          );
        })}
    </div>);
}