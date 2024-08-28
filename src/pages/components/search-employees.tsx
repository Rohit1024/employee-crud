import { Input } from "@/components/ui/input";

export function SearchEmployees() {
	return (
		<Input
			placeholder="search by role, name"
			className=" ring-zinc-300 bg-white dark:bg-inherit focus:dark:ring-zinc-700  focus:ring-zinc-300"
		/>
	);
}