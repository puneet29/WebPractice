$('.add-btn').on('click', function () {
    $('.add-section').toggleClass('hide');
    $('.add-section').find('input').focus();
});

$('#add-textbox').on('keypress', function (event) {
    if (event.which === 13) {
        let element = `<div class="row">
        <span><i class="fas fa-trash-alt hide"></i></span>
        <li></li>
    </div>`;
        let val = $(this).val();
        $('.list').append(element);
        $(this).val('');
        $('.list .row li').last().text(val);
    }
});

function addRowListeners() {
    $('.list').on('mouseover', '.row', function () {
        let delete_btn = $(this).find('i');
        delete_btn.removeClass('hide');
    });

    $('.list').on('mouseout', '.row', function () {
        let delete_btn = $(this).find('i');
        delete_btn.addClass('hide');
    });

    $('.list').on('click', '.fa-trash-alt', function () {
        $(this).parent().parent().fadeOut(500, function () {
            $(this).remove();
        });
        event.stopPropagation();
    });

    $('.list').on('click', '.row li', function () {
        $(this).toggleClass('completed');
    });
}

addRowListeners();
