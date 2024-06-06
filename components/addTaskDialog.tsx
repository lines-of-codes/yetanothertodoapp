import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

export default function AddTaskDialog() {
	function close() {}

	return (
		<Dialog
			as="div"
			className="relative z-10 focus:outline-none"
			onClose={close}
		>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4">
					<DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
						<DialogTitle
							as="h3"
							className="text-base/7 font-medium text-white"
						>
							Payment successful
						</DialogTitle>
						<p className="mt-2 text-sm/6 text-white/50">
							Your payment has been successfully submitted. We've
							sent you an email with all of the details of your
							order.
						</p>
						<div className="mt-4">
							<Button
								className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
								onClick={close}
							>
								Got it, thanks!
							</Button>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	);
}
