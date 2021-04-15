import { writable } from 'svelte/store';

const taskStore = () => {
	const fields = {
		name: undefined,
		description: undefined,
		finalized: undefined,
		scheduled: undefined,
		scheduledDate: undefined,
		taskDate: undefined
	};
	const { subscribe, set, update } = writable(fields);
	const methods = {
		init() {
			update((fields) => {
                name='';
                description='';
				finalized = false;
				scheduled = false;
				taskDate = new Date();
				return fields;
			});
		},
		setName() {},
        setDescription() {},
       
	};
};

export default taskStore();
