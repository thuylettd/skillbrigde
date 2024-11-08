$('.js-lang').click(function () {
	$(this).next().slideToggle();

	$('.switch-language__list li a').click(function () {
		var lang_value = $(this).html();
		$('.switch-language__label').html(lang_value);
		$('.switch-language__list').slideUp();
	})
});

$('.js-dropdown').click(function (e) {
	e.preventDefault();
	$(this).next().slideToggle();
	$(this).toggleClass('is-active');
})



$('.btn-action').click(function () {
	$(this).next().slideToggle();
	$(this).toggleClass('is-active');
})


$('.js-cancel').click(function (e) {
	e.preventDefault();
	$(this).closest('.c-modal').removeClass('is-show');
	$('body').removeClass('has-modal');
	$('html').removeClass("js-locked");
})


$('.js-show-modal').click(function (e) {
	e.preventDefault();
	$('.cms-heading__control-option').slideUp();
	var modal_id = $(this).attr('data-modal');
	$('.c-modal').removeClass('is-show');
	$('#' + modal_id).addClass('is-show');
	$('body').addClass('has-modal');
	$('html').addClass("js-locked");
	$('.c-dropdown').slideUp();
	$('.action-content').slideUp();

	//height modal > 100vh

	if ($('#' + modal_id).find('.c-modal__wp').outerHeight() > $(window).height()) {
		$('#' + modal_id).addClass('flex-start');
	}
});




//Add person
var id_person = 0;
$('.js-add-person').click(function (e) {
	e.preventDefault();
	id_person++;
	let data_label = $(this).attr('data-label');
	$(this).before(`<div class="representative-box">
	<p class="representative-box__label">`+ data_label + ` ` + id_person + `</p>
	<a href="#" class="c-btn__delete representative-box__del">Xoá</a>
	<div class="representative-box__field">
		<dl class="representative-box__dl">
			<dt class="representative-box__dt">Tên người đại diện</dt>
			<dd class="representative-box__dd"><input type="text" class="form-control" value="" placeholder="Nhập tên người đại diện"></dd>
		</dl>
		<dl class="representative-box__dl">
			<dt class="representative-box__dt">Phương thức liên lạc</dt>
			<dd class="representative-box__dd"><input type="text" class="form-control" value="" placeholder="Nhập phương thức liên lạc"></dd>
		</dl>
		<dl class="representative-box__dl">
			<dt class="representative-box__dt">Chức danh</dt>
			<dd class="representative-box__dd"><input type="text" class="form-control" value="" placeholder="Nhập chức danh"></dd>
		</dl>
	</div>
</div>` );
	$('.representative-box__del').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
})

//Add person 02
$('.js-add-contact-person').click(function (e) {
	e.preventDefault();
	$(this).before(`<div class="contact-person__field contact-person__field--added">
		<input type="text" class="form-control" value="Full Name A">
		<textarea name="" id="" class="form-control form-control--textarea" placeholder="Cách liên lạc với người đảm nhận quan hệ 1 -1"></textarea>
		<button class="contact-person__field-delete"></button>
	</div>` );
	$('.contact-person__field-delete').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
})


//Add address 02
var id_address = 1;
$('.js-add-address').click(function (e) {
	e.preventDefault();
	id_address++;
	$(this).before(`<div class="company-address company-address--added">
                                    <span class="company-address__label">Địa chỉ ` + id_address + `</span>
                                    <ul class="company-address__form">
                                        <li class="company-address__input">
                                            <input type="text" class="form-control" placeholder="Địa chỉ cụ thể">
                                        </li>
                                        <li class="company-address__input">
                                            <input type="text" class="form-control" placeholder="Link URL Google map">
                                        </li>
                                        <span class="company-address__label">Preview map</span>
                                    </ul>
                                    <button class="company-address__delete"></button>
                                </div>` );
	$('.company-address__delete').click(function (e) {
		e.preventDefault();
		id_address--;
		$(this).parent().remove();
	})
})
//-----


jQuery(function () {
	jQuery('.multiSelect').each(function (e) {
		var self = jQuery(this);
		
		var field = self.find('.multiSelect_field');
		var fieldOption = field.find('option');
		var placeholder = field.attr('data-placeholder');
		var select_id = self.find('.multiSelect_field').attr('id');
		
		field.hide().after(`<div class="multiSelect_dropdown"></div>
						  <span class="multiSelect_placeholder">` + placeholder + `</span>
						  <ul class="multiSelect_list"></ul>
						  <span class="multiSelect_arrow"></span>`);
		
	    var list = self.find('.multiSelect_list');
		fieldOption.each(function (e) {
			list.append(`<li class="multiSelect_option" data-value="` + jQuery(this).val() + `">
											  <a class="multiSelect_text">`+ jQuery(this).text() + `</a>
											</li>`);
		});

		var dropdown = self.find('.multiSelect_dropdown');
		var option = self.find('.multiSelect_option');
		var optionText = self.find('.multiSelect_text');

		dropdown.attr('data-multiple', 'true');
		list.css('top', dropdown.height() + 5);

		option.click(function (e) {
			var self = jQuery(this);
			e.stopPropagation();
			self.addClass('-selected');
			field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
			dropdown.append(function (e) {
				return jQuery('<span class="multiSelect_choice">' + self.children().text() + '</span>').click(function (e) {
					var self = jQuery(this);
					e.stopPropagation();
					self.remove();
					list.find('.multiSelect_option:contains(' + self.text() + ')').removeClass('-selected');
					list.css('top', dropdown.height() + 5).find('.multiSelect_noselections').remove();
					field.find('option:contains(' + self.text() + ')').prop('selected', false);
					if (dropdown.children(':visible').length === 0) {
						dropdown.removeClass('-hasValue');
					}
				});
			}).addClass('-hasValue');
			list.css('top', dropdown.height() + 5);
		});

		dropdown.click(function (e) {
			e.stopPropagation();
			e.preventDefault();
			dropdown.toggleClass('-open');
			list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
		});

		jQuery(document).on('click touch', function (e) {
			if (dropdown.hasClass('-open')) {
				dropdown.toggleClass('-open');
				list.removeClass('-open');
			}
		});
	});
});


//js upload file
var input_file = $('#file');

$(document).on('change', 'input[type="file"]', function () {
	var iConvert = (this.files[0].size / 1048576).toFixed();
	var name = $(this).attr("name");
	var fileName = $(this)[0].files[0].name;
	$(this).parent().next().find('.txt-link').html(fileName);
	$(this).parent().next().css('display', 'flex');
	$(this).parent().hide();

	$('.btn-upload').removeClass('disable');

	$('.js-remove-file').click(function (e) {
		e.preventDefault();
		input_file.val('');
		$(this).parent().hide();
		$(this).parent().prev().show();
		$('.btn-upload').addClass('disable');
	})
});vvv 




$('input[name="upload-img"]').each(function () {
	var sefl = $(this);
	sefl.on('change', function () {
		readURL(this, sefl.parent());  //Change the image
	});

	$('.close-btn').on('click', function () { //Unset the image
		let file = $(this).prev();
		let upload_area = $(this).parent();
		upload_area.css('background-image', 'unset');
		upload_area.removeClass('file-set');
		file.replaceWith(file = file.clone(true));
	});
})




//FILE
function readURL(input, obj) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			obj.css('background-image', 'url(' + e.target.result + ')');
			obj.addClass('file-set');
		}
		reader.readAsDataURL(input.files[0]);
	}
};

//upload multiple image jquery
$(document).ready(function () {
	if (window.File && window.FileList && window.FileReader) {
		$('.upload-multile-file').each(function () {
			let sefl = $(this);
			let data_image = sefl.attr('data-img');
			
			
			if (data_image == "image-company-03" || data_image == "image-company-03SP") {
				sefl.on("change", function (e) {
					var files = e.target.files,
						filesLength = files.length;
					for (var i = 0; i < filesLength; i++) {
						var f = files[i]
						var fileReader = new FileReader();
						fileReader.onload = (function (e) {
							var file = e.target;
							var template_img = `<li><img src="`+ e.target.result +`" alt=""><span class="remove"></span></li>`;
							sefl.closest('.company-gallery__box').find("#" + data_image).append(template_img);
							sefl.closest('.company-gallery__box').find(".content-empty").hide();
							$(".remove").click(function () {
								$(this).parent().remove();
								if (sefl.closest('.company-gallery__box').find(".company-gallery__list li").length == 0) {
									sefl.closest('.company-gallery__box').find(".content-empty").show();
								}
							});
							
						});
						fileReader.readAsDataURL(f);
					}
				});
			} else {
				sefl.on("change", function (e) {
					var files = e.target.files,
						filesLength = files.length;
					for (var i = 0; i < filesLength; i++) {
						var f = files[i]
						var fileReader = new FileReader();
						fileReader.onload = (function (e) {
							var file = e.target;
							var template_img = `<li><img src="`+ e.target.result +`" alt=""><span class="remove"></span></li>`;
							sefl.closest('.company-gallery').find("#" + data_image).append(template_img);
							sefl.closest('.company-gallery').find(".content-empty").hide();
							$(".remove").click(function () {
								$(this).parent().remove();
								if (sefl.closest('.company-gallery').find(".company-gallery__list li").length == 0) {
									sefl.closest('.company-gallery').find(".content-empty").show();
								}
							});
							
						});
						fileReader.readAsDataURL(f);
					}
				});
			}
		})
		
	} else {
		alert("Your browser doesn't support to File API")
	}
});
