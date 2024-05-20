document.addEventListener("DOMContentLoaded", function() {
    fetch("../alert-banner.html")
        .then(response => response.text())
        .then(data => {
            const tempElement = document.createElement('div');
            tempElement.innerHTML = data.trim();

            const alertBanner = tempElement.querySelector('.alert-banner');
            if (alertBanner && alertBanner.innerHTML.trim()) {
                document.body.insertAdjacentHTML('afterbegin', data);
                document.body.classList.add('announcement-active');
            } else {
                document.body.insertAdjacentHTML('afterbegin', '<div class="alert-banner hidden"></div>');
            }
        });
});
