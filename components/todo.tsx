"use client";

import { TodoModel } from "@/lib/data/todos";
import { Checkbox, Field, Label } from "@headlessui/react";
import { RegularCheckmark } from "lineicons-react";
import { useState } from "react";

export default function TodoItem(props: { todo: TodoModel }) {
	const todo = props.todo;
	const [isCompleted, setIsCompleted] = useState(todo.completed);

	return (
		<li
			className="button rounded mt-2 flex"
			onClick={() => setIsCompleted(!isCompleted)}
		>
			<Field className="grow py-2 px-4 cursor-pointer flex">
				<Checkbox
					name={todo.id + "-completion"}
					checked={isCompleted}
					className="mr-2 rounded bg-slate-200 dark:bg-slate-800 dark:ring-1 dark:ring-slate-700 dark:ring-inset size-6 p-1 data-[checked]:bg-black dark:data-[checked]:bg-white"
				>
					<RegularCheckmark
						className={
							"fill-white dark:fill-black " +
							(isCompleted ? "block" : "hidden")
						}
					/>
				</Checkbox>
				<Label>{todo.title}</Label>
			</Field>
		</li>
	);
}
