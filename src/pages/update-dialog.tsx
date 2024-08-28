import DailogForm from "@/components/dialog-form";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import EditDialog from "./components/update-employee";
import { Employee } from "@/schema";


type Props = {
    data: Employee
}

export function UpdateEmployeeDialog(props : Props) {
	return (
		<DailogForm
			id="update-trigger"
			title="Edit Employee"
			Trigger={
				<Button variant="outline">
					<Icons.edit className="h-4 w-4 mr-2"/>
					Edit
				</Button>
			}
			form={<EditDialog employee={props.data}/>}
		/>
	);
}