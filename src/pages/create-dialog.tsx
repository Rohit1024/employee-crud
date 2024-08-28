import { Button } from "@/components/ui/button";
import { CreateForm } from "./components/create-employee";
import DailogForm from "@/components/dialog-form";
import { Icons } from "@/components/icons";

export default function CreateEmployeeDialog() {
	return (
		<DailogForm
			id="create-trigger"
			title="Create Employee"
			Trigger={<Button variant="outline">Create <Icons.add className="h-4 w-4 ml-2" /></Button>}
			form={<CreateForm />}
		/>
	);
}