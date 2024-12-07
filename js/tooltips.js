/*
#####################################################################
    Author: Hamza Tariq
    Date: Dec 6, 2024
    Purpose: CIS-1280 2024 Portfolio Project - tooltips.js
    Description: This file has the code which triggers the tooltip upon hovering on navbar elements.
    Dependencies: None
#####################################################################
*/
document.addEventListener('DOMContentLoaded', function () {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
});
