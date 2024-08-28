import Table from "@/components/ui/Table";
import { ListOfEmployees } from "./employees-cells";
import { Suspense } from "react";
import { Icons } from "@/components/icons";

export function EmployeesTable() {
	const tableHeader = ["First Name", "Last Name", "Email", "Salary"];

	return (
		<Table headers={tableHeader}>
            <Suspense fallback={<Icons.spinner className="h-10 w-10 animate-spin"/>}>
                <ListOfEmployees />
            </Suspense>
		</Table>
	);
}