export const getNameFromEmail = (email: string): string => {
	let name: string = email;

	/* Remove domain */
	name = name.split("@")[0] ?? "";

	/* Remove characters after + */
	name = name.split("+")[0] ?? "";

	/* Remove numbers */
	name = name.replace(/[0-9]/g, "");

	/* Remove special characters hyphen, underscore and dot */
	name = name.replace(/[-_.]/g, " ");

	/* Capitalize first letter of each word */
	name = name
		.split(" ")
		.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return name;
};
