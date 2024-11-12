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

var id_contact_person = 0;
$('.js-add-contact-person').click(function (e) {
	e.preventDefault();
	id_contact_person++;
	if (id_contact_person > 1) {
		$(this).before(`<div class="contact-person__field contact-person__field--added"><span class="company-detail__field-label">Tên và cách thức người đảm nhận liên lạc số <span class="number"></span></span>
			<input type="text" class="form-control" value="" placeholder="Tên người đảm nhận">
			<textarea name="" id="" class="form-control form-control--textarea" placeholder="Cách liên lạc với người đảm nhận"></textarea>
			<button class="contact-person__field-delete"></button>
		</div>` );
	} else {
		$(this).before(`<div class="contact-person__field contact-person__field--added">
			<input type="text" class="form-control" value="" placeholder="Tên người đảm nhận">
			<textarea name="" id="" class="form-control form-control--textarea" placeholder="Cách liên lạc với người đảm nhận"></textarea>
			<button class="contact-person__field-delete"></button>
		</div>` );
	}


	$('.contact-person__field-delete').click(function (e) {
		id_contact_person--;
		if (id_contact_person < 1) {
			id_contact_person = 0;
		}
		e.preventDefault();
		$(this).parent().remove();
		console.log(id_contact_person);
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
});




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
			let count_item = 0;
			sefl.on("change", function (e) {
				var files = e.target.files,
					filesLength = files.length;
				count_item++;
				
				for (var i = 0; i < 5; i++) {
					var f = files[i];
					var fileReader = new FileReader();
					fileReader.onload = (function (e) {
						var template_img = `<li><img src="` + e.target.result + `" alt=""><span class="remove"></span></li>`;
						if (data_image == "image-company-03" || data_image == "image-company-03SP") {
							sefl.closest('.company-gallery__box').find("#" + data_image).append(template_img);
							sefl.closest('.company-gallery__box').find(".content-empty").hide();
							sefl.closest('.company-gallery__box').find(".btn-edit").show();
							sefl.closest('.company-gallery__box').find(".btn-upload").addClass('hide');
							$(".remove").click(function () {
								$(this).parent().remove();
								if (sefl.closest('.company-gallery__box').find(".company-gallery__list li").length == 0) {
									sefl.closest('.company-gallery__box').find(".content-empty").show();
									sefl.closest('.company-gallery__box').find(".btn-edit").hide();
									sefl.closest('.company-gallery__box').find(".btn-upload").removeClass('hide');
								} else if (sefl.closest('.company-gallery__box').find(".company-gallery__list li").length < 5) {
									sefl.parent().removeClass('is-disabled');
								}
							});
						} else {
							sefl.closest('.company-gallery').find("#" + data_image).append(template_img);
							sefl.closest('.company-gallery').find(".content-empty").hide();
							$(".remove").click(function () {
								$(this).parent().remove();
								var count_item_remove = sefl.closest('.company-gallery').find(".company-gallery__list li").length;
								count_item = count_item_remove;
								if (sefl.closest('.company-gallery').find(".company-gallery__list li").length == 0) {
									sefl.closest('.company-gallery').find(".content-empty").show();
								} else if (sefl.closest('.company-gallery').find(".company-gallery__list li").length < 5) {
									sefl.parent().removeClass('is-disabled');
								}
							});
						}
					});
					if (i == 4) {
						sefl.parent().addClass('is-disabled');
					}
					if (count_item == 5) {
						sefl.parent().addClass('is-disabled');
					}
					fileReader.readAsDataURL(f);
				}

				var count_item_current = $('#' + data_image).find('li').length;
				console.log(count_item_current);
			});
		})
	} else {
		alert("Your browser doesn't support to File API")
	}
});


// jQuery(document).ready(function () {
// 	ImgUpload();
// });

// function ImgUpload() {
// 	var imgWrap = "";
// 	var imgArray = [];
// 	$('.upload-multile-file').each(function () {
// 		let data_image = $(this).attr('data-img');
// 		$(this).on('change', function (e) {
// 			imgWrap = $('#' + data_image);
// 			var maxLength = $(this).attr('data-max_length');

// 			var files = e.target.files;
// 			var filesArr = Array.prototype.slice.call(files);
// 			var iterator = 0;
// 			var sefl = $(this);
// 			console.log(maxLength);
// 			console.log(imgArray.length);
// 			filesArr.forEach(function (f, index) {

// 				if (!f.type.match('image.*')) {
// 					return;
// 				}

// 				if (imgArray.length >= maxLength) {
					
// 					sefl.parent().addClass('is-disabled');
// 					return false

// 				} else {
// 					sefl.parent().removeClass('is-disabled');
// 					var len = 0;
// 					for (var i = 0; i < imgArray.length; i++) {
// 						if (imgArray[i] !== undefined) {
// 							len++;
// 						}
// 					}
// 					if (len >= maxLength) {
// 						sefl.parent().addClass('is-disabled');
// 						return false;

// 					} else {
// 						sefl.parent().removeClass('is-disabled');
// 						imgArray.push(f);

// 						var reader = new FileReader();
// 						reader.onload = function (e) {
// 							var html = `<li><img src="` + e.target.result + `" data-number="`+ $(".remove").length +`" data-file="` + f.name + `"><span class="remove"></span></li>`;
// 							imgWrap.append(html);
// 							iterator++;
// 						}
// 						reader.readAsDataURL(f);
// 					}
// 				}
// 			});
// 		});
// 	});

// 	$('body').on('click', ".remove", function (e) {
// 		var file = $(this).prev().data("file");
// 		console.log(imgArray);
// 		if (imgArray.length < 6) {
// 			$(this).closest(".company-gallery").find(".btn-upload").removeClass('is-disabled');
// 		}
// 		for (var i = 0; i < imgArray.length; i++) {
// 			if (imgArray[i].name === file) {
// 				imgArray.splice(i, 1);
// 				break;
// 			}
// 		}
// 		$(this).parent().remove();
// 	});
// }

