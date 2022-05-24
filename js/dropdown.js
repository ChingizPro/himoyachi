(function () {
	var elDropdown = $(".nav__dropdown");
	var elDropdownToggler = $(".nav__lang");
	var elDropdownList = $(".nav__list--langs");

	var hideDropdown = (evt) => {
		if (
			!evt.target.classList.contains("tick") &&
			!evt.target.classList.contains("langclick")
		) {
			elDropdownList.classList.remove("dropdown--show");
			elDropdownToggler.classList.remove("active");
			elDropdownToggler.removeEventListener(
				"click",
				hideDropdownOnTogglerClick
			);
			document.removeEventListener("click", hideDropdown);
		}
	};

	var hideDropdownOnTogglerClick = () => {
		elDropdownList.classList.remove("dropdown--show");
		elDropdownToggler.classList.remove("active");
		elDropdownToggler.removeEventListener("click", hideDropdownOnTogglerClick);
		document.removeEventListener("click", hideDropdown);
	};

	var showDropdown = () => {
		elDropdownList.classList.add("dropdown--show");
		elDropdownToggler.classList.add("active");
		document.addEventListener("click", hideDropdown);
		elDropdownToggler.addEventListener("click", hideDropdownOnTogglerClick);
	};

	elDropdownToggler.addEventListener("click", showDropdown);

	elDropdown.addEventListener("click", langSelect);
})();
