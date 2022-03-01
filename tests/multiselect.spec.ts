import { render } from '@testing-library/svelte';
import MultiSelect from 'svelte-multiselect';

const webFrameworks = [
	`Svelte`,
	`React`,
	`Vue`,
	`Angular`,
	`Polymer`,
	`Ruby on Rails`,
	`ASP.net`,
	`Laravel`,
	`Django`,
	`Express`,
	`Spring`
];

test(`render multiselect`, () => {
	render(MultiSelect, { options: webFrameworks });
});

test(`mount component`, async () => {
	const options = [`Banana`, `Watermelon`, `Apple`, `Dates`, `Mango`];
	const instance = new MultiSelect({
		target: document.body,
		props: { options }
	});
	expect(instance).toBeTruthy();

	const lis = document.body.querySelectorAll(`div.multiselect > ul.options > li`);
	expect(lis.length).toEqual(5);
	lis.forEach((li, i) => {
		expect(li.textContent).toContain(options[i]);
	});
});
