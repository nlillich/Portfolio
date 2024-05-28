function showPopup(popupId) {
    var popup = document.getElementById(popupId);
    var openPopups = document.querySelectorAll('.popup:not(#' + popupId + ')');
    openPopups.forEach(function(popup) {
        popup.style.display = 'none';
    });
    if (popup) {
        popup.style.display = 'block';
    }
}

function closePopup(popupId) {
    var popup = document.getElementById(popupId);
    if (popup) {
        popup.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    if (event.target.matches('.close')) {
        var popup = event.target.closest('.popup');
        if (popup) {
            closePopup(popup.id);
        }
    } 
    else if (event.target.closest('.project-2')) {
        showPopup('popup-2');
    }
    else if (event.target.closest('.project-1')) {
        showPopup('popup-1');
    }
    else if (event.target.closest('.project-3')) {
        showPopup('popup-3');
    }
    else if (!event.target.closest('.popup-content')) {
        var popups = document.querySelectorAll('.popup');
        popups.forEach(function(popup) {
            popup.style.display = 'none';
        });
    }
});
