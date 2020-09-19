// تم إضافة المنتج للعربة

$('[data-add-to-cart]').click(function(e) {
  Swal.fire(
    ' تمّ إضافة المنتج للعربة بنجاح',
    'تابع التسوُق',
    'success'
  )
    e.stopPropagation();
});


