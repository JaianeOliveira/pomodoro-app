const switch_items = document.querySelectorAll('.switch-item');

switch_items.forEach((item) => {
	item.addEventListener('click', () => {
		const isActive = !!item.classList.contains('switch-item-active');

		if (!isActive) {
			switch_items.forEach((item) => {
				item.classList.remove('switch-item-active');
			});
			item.classList.add('switch-item-active');
		}
	});
});
