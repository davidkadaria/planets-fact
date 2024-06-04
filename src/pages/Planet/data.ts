const buttonData: { id: string; label: 'overview' | 'structure' | 'surface' }[] = [
	{
		id: '01',
		label: 'overview',
	},
	{
		id: '02',
		label: 'structure',
	},
	{
		id: '03',
		label: 'surface',
	},
];
const detailsData: { key: 'rotation' | 'revolution' | 'radius' | 'temperature'; label: string }[] =
	[
		{
			key: 'rotation',
			label: 'Rotation time',
		},
		{
			key: 'revolution',
			label: 'Revolution time',
		},
		{
			key: 'radius',
			label: 'Radius',
		},
		{
			key: 'temperature',
			label: 'Average temp.',
		},
	];

export { buttonData, detailsData };
