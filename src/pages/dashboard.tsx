import { EmployeesTable } from "./components/employee-table";
import { SearchEmployees } from "./components/search-employees";
import CreateEmployeeDialog from "./create-dialog";

export function Dashboard() {
	return (
		<div className="space-y-4 mt-2 w-full overflow-y-auto px-3 mx-auto max-w-screen-xl">
			<h1 className="text-3xl font-bold">Employees</h1>
			<div className="flex gap-2">
				<SearchEmployees />
				<CreateEmployeeDialog />
			</div>
			<EmployeesTable />
		</div>
	);
}