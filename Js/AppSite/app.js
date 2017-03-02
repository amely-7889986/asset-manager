/*input[radio]样式美化*/
$(function() {
  $('.mui-search-select label').click(function(){
    var radioId = $(this).attr('name');
    $('.mui-search-select label').removeAttr('class') && $(this).attr('class', 'checked');
    $('.mui-search-select input[type="radio"]').removeAttr('checked') && $('#' + radioId).attr('checked', 'checked');
  });
});