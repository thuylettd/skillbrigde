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

$(".toggle-pass").click(function() {
	var input = $($(this).attr("toggle"));
	if (input.attr("type") == "password") {
		input.attr("type", "text");
	} else {
		input.attr("type", "password");
	}
	});


$('.btn-action').click(function () {
	$(this).next().slideToggle();
	$(this).toggleClass('is-active');
})


$('.js-cancel').click(function (e) {
	e.preventDefault();
	$(this).closest('.c-modal').removeClass('is-show');
	$('body').removeClass('has-modal');
})


$('.js-show-modal').click(function (e) {
	e.preventDefault();
	$('.cms-heading__control-option').slideUp();
	var modal_id = $(this).attr('data-modal');
	$('.c-modal').removeClass('is-show');
	$('#' + modal_id).addClass('is-show');
	$('body').addClass('has-modal');
	$('.c-dropdown').slideUp();
	$('.action-content').slideUp();
});


$('ul.c-tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.c-tabs li').removeClass('is-active');
	$('.tabs-content').removeClass('current');

	$(this).addClass('is-active');
	$("#"+tab_id).addClass('current');
})





//update skills selected on input
$('.js-submit-skills').click(function (e) {
	e.preventDefault();
	$('.tabs-content input').each(function () {
		if ($(this).prop('checked')) {
			$('#register-form__list-skills').val($(this).val());
		}
	})
	$('.c-modal').removeClass('is-show');
})


$('.txt-delete-all').click(function (e) {
	e.preventDefault();
	$('.box-selected__result li').hide();
	$('.box-selected__heading .qty').html('(0)');
	$('.tabs-content input').prop('checked', false);
})


$('.btn-delete-skills-after').click(function () {
	$('#fillter').hide();
	$(this).parent().hide();
})

function updateTotal() {
	let count = 0;
	let checkbox_el = $('.tabs-content input');
	for (let i = 0; i < checkbox_el.length; i++) {
		if (checkbox_el[i].checked === true) {
			count++;
		}
	}

	$('.box-selected__heading .qty').html('('+count+')');
}

$('.fillter-acc__label').click(function () {
	$(this).next().slideToggle();
	$(this).parent().toggleClass('is-active');
})


$('.acc-skills__dt').click(function () {
	$(this).next().slideToggle(100);
	$(this).parent().toggleClass('is-active');
})


var skill_template = `<div class="form-grid form-grid--styles02">
											<dl class="form-group">
												<dt class="form-group__label">資格証明書</dt>
												<dd class="form-group__input">
													<a href="" class="txt-link js-qualifications">参考</a>
													<input type="text" class="form-control" placeholder="基本情報技術者">
												</dd>
											</dl>
											<dl class="form-group">
												<dt class="form-group__label">取得日</dt>
												<dd class="form-group__input">
													<input type="text" placeholder="2021年06月" class="form-control form-control--date">
												</dd>
											</dl>
											<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
										</div>`;

var project = `<div class="box-project">
<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
<div class="form-grid">
	<dl class="form-group form-group--full">
		<dt class="form-group__label">プロジェクト名</dt>
		<dd class="form-group__input">
			<input type="text" class="form-control" placeholder="プロジェクト名を入力してください。">
		</dd>
	</dl>
	<dl class="form-group">
		<dt class="form-group__label">開始</dt>
		<dd class="form-group__input">
			<input type="text" class="form-control" placeholder="Select time">
		</dd>
	</dl>
	<dl class="form-group">
		<dt class="form-group__label">終了</dt>
		<dd class="form-group__input">
			<input type="text" class="form-control" placeholder="Select time">
		</dd>
	</dl>
</div>
<div class="project-business">
	<h3 class="project-business__ttl"><span>業務内容</span></h3>
	<dl class="form-group form-group--full form-group--styles02">
		<dt class="form-group__label"><span>*</span>プロジェクト内容</dt>
		<dd class="form-group__input">
			<img src="../img/common/editor-02.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>組織</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-01.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>組織</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-02.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>役割</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-02.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>開発環境</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-03.png" alt="プロジェクト内容">
		</dd>
	</dl>
	<dl class="form-group form-group--full">
		<dt class="form-group__label"><span>*</span>担当業務</dt>
		<dd class="form-group__input">
			<img src="../img/common/input-04.png" alt="担当業務">
		</dd>
	</dl>
</div>
</div>`;

var project02 = `<div class="register-form__dd-wp form-grid project-content02">
<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
<dl class="form-group form-group--full">
	<dt class="form-group__label">勤務先</dt>
	<dd class="form-group__input">
		<input type="text" placeholder="氏名を入力してください。" class="form-control">
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label"><span>*</span>勤務先</dt>
	<dd class="form-group__input">
		<select name="" id="" class="form-control form-control--select">
			<option value="いつから">いつから</option>
			<option value=""></option>
		</select>
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label"><span>*</span>終了日</dt>
	<dd class="form-group__input">
		<select name="" id="" class="form-control form-control--select">
			<option value="いつから">いつから</option>
			<option value=""></option>
		</select>
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label">資本金</dt>
	<dd class="form-group__input">
		<input type="text" class="form-control" placeholder="資本金を選択してください。">
	</dd>
</dl>
<dl class="form-group">
	<dt class="form-group__label">資本金</dt>
	<dd class="form-group__input">
		<input type="text" class="form-control" placeholder="従業員数を入力してください。">
	</dd>
</dl>
<a href="#" class="btn-add-project mt0">この会社のプロジェクを追加</a>
</div>`;

$('.box-project__close').click(function (e) {
	e.preventDefault();
	$(this).parent().remove();
});


//js add field qualifications
$('.js-qualifications').click(function (e) {
	e.preventDefault();
	var id = $(this).attr('data-id');
	$('#qualifications').attr('data-modal', id);
	$('#qualifications').addClass('is-show');
});

var id = 2;
$('.js-add-qualifications').click(function (e) {
	// $(this).parent().append(skill_template);
	e.preventDefault();
	id++;
	$(this).before( `<div class="form-grid form-grid--styles02">
	<dl class="form-group">
		<dt class="form-group__label">資格証明書</dt>
		<dd class="form-group__input">
			<a href="" class="txt-link js-qualifications" data-id="`+ id +`">参考</a>
			<input type="text" class="form-control" placeholder="基本情報技術者" id="`+ id +`">
		</dd>
	</dl>
	<dl class="form-group">
		<dt class="form-group__label">取得日</dt>
		<dd class="form-group__input">
			<input type="text" placeholder="2021年06月" class="form-control form-control--date">
		</dd>
	</dl>
	<a href="" class="box-project__close"><img src="../img/common/close-circle-red.png" alt="" width="24"></a>
</div>` );
	$('.box-project__close').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
	$('.js-qualifications').click(function (e) {
		e.preventDefault();
		var id = $(this).attr('data-id');
		$('#qualifications').attr('data-modal', id);
		$('#qualifications').addClass('is-show');
	});
})

$('.js-add-project').click(function (e) {
	e.preventDefault();
	$(this).before(project);
	$('.box-project__close').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
})

$('.js-add-project02').click(function (e) {
	e.preventDefault();
	$(this).before(project02);
	$('.box-project__close').click(function (e) {
		e.preventDefault();
		$(this).parent().remove();
	})
})


//Add person
var id_person = 1;
$('.js-add-person').click(function (e) {
	e.preventDefault();
	id_person++;
	$(this).before( `<div class="representative-box">
	<p class="representative-box__label">Người đại diện ` + id_person + `</p>
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
//-----


$('.js-submit-qualifications').click(function (e) {
	e.preventDefault();
	var data_modal = $(this).closest('.c-modal').attr('data-modal');
	console.log(data_modal);
	$('.qualifications-content__wp input').each(function () {
		if ($(this).prop('checked')) {
			$('#' + data_modal).val($(this).val());
		}
	})
	$('#qualifications').removeClass('is-show');
})




jQuery(function() {
	jQuery('.multiSelect').each(function(e) {
	  var self = jQuery(this);
	  var field = self.find('.multiSelect_field');
	  var fieldOption = field.find('option');
	  var placeholder = field.attr('data-placeholder');
  
	  field.hide().after(`<div class="multiSelect_dropdown"></div>
						  <span class="multiSelect_placeholder">` + placeholder + `</span>
						  <ul class="multiSelect_list"></ul>
						  <span class="multiSelect_arrow"></span>`);
	  
	  fieldOption.each(function(e) {
		jQuery('.multiSelect_list').append(`<li class="multiSelect_option" data-value="`+jQuery(this).val()+`">
											  <a class="multiSelect_text">`+jQuery(this).text()+`</a>
											</li>`);
	  });
	  
	  var dropdown = self.find('.multiSelect_dropdown');
	  var list = self.find('.multiSelect_list');
	  var option = self.find('.multiSelect_option');
	  var optionText = self.find('.multiSelect_text');
	  
	  dropdown.attr('data-multiple', 'true');
	  list.css('top', dropdown.height() + 5);
	  
	  option.click(function(e) {
		var self = jQuery(this);
			  e.stopPropagation();
		  self.addClass('-selected');
		  field.find('option:contains(' + self.children().text() + ')').prop('selected', true);
		dropdown.append(function(e) {
		  return jQuery('<span class="multiSelect_choice">'+ self.children().text() +'</span>').click(function(e) {
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
		  if (!option.not('.-selected').length) {
			list.append('<h5 class="multiSelect_noselections">No Selections</h5>');
		  }
	  });
	  
	  dropdown.click(function(e) {
		e.stopPropagation();
		e.preventDefault();
		dropdown.toggleClass('-open');
		list.toggleClass('-open').scrollTop(0).css('top', dropdown.height() + 5);
	  });
	  
	  jQuery(document).on('click touch', function(e) {
		  if (dropdown.hasClass('-open')) {
			  dropdown.toggleClass('-open');
			  list.removeClass('-open');
		  }
	  });
	});
  });





//   $('.btn-acc').click(function () {
// 	$(this).parent().next().find('.master-datasub').slideToggle();
// 	$(this).toggleClass('is-active');
//   })


  $('.js-acc02').click(function () {
	var data_acc = $(this).attr('data-acc');
	console.log(data_acc);
	$(this).parent().find('.' + data_acc).slideToggle();
	$(this).toggleClass('is-active');
  })


  $('.js-tabs li a').click(function(e){
	e.preventDefault();
	var tab_id = $(this).attr('data-tab');

	$('.js-tabs li').removeClass('is-active');
	$('.tabs-content').removeClass('current');

	$(this).parent().addClass('is-active');
	$("#"+tab_id).addClass('current');
});





$('.tabs-content input').each(function () {
	$(this).change(function () {
		let val_checkbox = $(this).val();

		//add item select while input check is checked
		if($(this).prop('checked')){
			$('.box-selected__result').append("<li class=" + val_checkbox + "><span class='txt-val'>" + val_checkbox + "</span><span class='btn-detete-selected'></span></li>");
		}else{
			$('.box-selected__result li').each(function () {
				let txt_val = $(this).find('.txt-val').text();
				if(val_checkbox == txt_val){
					$('.' + val_checkbox).hide();
				}
			})
		}


		//cout item selected
		updateTotal();


		//delete only item white click 
		$('.btn-detete-selected').click(function () {
			var _this = $(this).parent().attr('class');
			
			$("." + _this).remove();
			let data_checkbox = $(this).prev().text();
			
			$('.tabs-content input').each(function () {
				let val_checkbox = $(this).val();
				if(data_checkbox == val_checkbox){
					$(this).prop('checked', false);
					updateTotal();
				}
			})
		})
	})
});


function updateTotal() {
	let count = 0;
	let checkbox_el = $('.tabs-content input');
	for (let i = 0; i < checkbox_el.length; i++) {
		if (checkbox_el[i].checked === true) {
			count++;
		}
	}

	$('.box-selected__heading .qty').html('('+count+')');
}


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


$( "#sortableTable tbody" ).sortable( {
	helper: function(e, tr)
	  {
		  var $originals = tr.children();
		  var $helper = tr.clone();
		  $helper.children().each(function(index)
		  {
			// Set helper cell sizes to match the original sizes
			$(this).width($originals.eq(index).width());
		  });
		  return $helper;
	  },
	  update: function( event, ui ) {
	  $(this).children().each(function(index) {
			  $(this).find('td.order').html(index + 1)
	  });
	}
});

$( ".tree-view__content" ).sortable( {
	helper: function(e, tr)
	  {
		  var $originals = tr.children();
		  var $helper = tr.clone();
		  $helper.children().each(function(index)
		  {
			// Set helper cell sizes to match the original sizes
			$(this).width($originals.eq(index).width());
		  });
		  return $helper;
	  },
	  update: function( event, ui ) {
	  $(this).children().each(function(index) {
			  $(this).find('.stt').html(index + 1)
	  });
	}
});