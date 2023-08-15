const init = () => {

    $('.img-thumbnail').on('click', function () {
        $('.img-fluid').attr('src', $(this)[0].src);
        $('#imageModal').modal('show');
    });

    // Disable modal behavior when the modal is closed
    $('#imageModal').on('hidden.bs.modal', function () {
        $('body').removeClass('modal-open');
    });

};

window.onload = init;