var ID = 0;
var article = function(props){
  return{
    title: props.title,
    supportingText: props.supportingText,
    postid: ID++
  }
}

var articlesArray = [
  {title: 'Vis Et Aperiam', supportingText: 'Lorem ipsum dolor sit amet, te congue iisque his, cu homero scriptorem efficiantur vel, te eum quodsi neglegentur signiferumque. Has utroque menandri no...', background: 'http://wallpaperswa.com/thumbnails/detail/20120420/cityscapes%20artwork%20saints%20row%20the%20third%201920x1080%20wallpaper_wallpaperswa.com_86.jpg'},
  {title: 'Lorem Ipsum', supportingText: 'Lorem ipsum dolor sit amet, te congue iisque his, cu homero scriptorem efficiantur vel, te eum quodsi neglegentur signiferumque. Has utroque menandri no...', background: 'http://www.platris.com/images/CityscapesManhattanNewYork_r3_c15.jpg'},
  {title: 'Porro Vocibus', supportingText: 'Lorem ipsum dolor sit amet, te congue iisque his, cu homero scriptorem efficiantur vel, te eum quodsi neglegentur signiferumque. Has utroque menandri no...', background: 'http://wallpaperswa.com/thumbnails/detail/20120315/cityscapes%20rain%20artwork%201680x1050%20wallpaper_www.wallpaperhi.com_61.jpg'},
  {title: 'Qui Ut Inani', supportingText: 'Lorem ipsum dolor sit amet, te congue iisque his, cu homero scriptorem efficiantur vel, te eum quodsi neglegentur signiferumque. Has utroque menandri no...', background: 'http://www.wallpaperfo.com/thumbnails/detail/20130218/cityscapes%20rain%20futuristic%20urban%20fantasy%20art%20cyberpunk%20artwork%20michael%20akimov%201700x1000%20wallpaper_www.wallpaperfo.com_22.jpg'},
  {title: 'Postea Pertinacia', supportingText: 'Lorem ipsum dolor sit amet, te congue iisque his, cu homero scriptorem efficiantur vel, te eum quodsi neglegentur signiferumque. Has utroque menandri no...', background: 'http://www.shutterevolve.com/wp-content/uploads/2014/03/cityscape-tutorials.jpg'},
  {title: 'Vide Officiis Tincidunt', supportingText: 'Lorem ipsum dolor sit amet, te congue iisque his, cu homero scriptorem efficiantur vel, te eum quodsi neglegentur signiferumque. Has utroque menandri no...', background: 'http://www.exposureguide.com/images/cityscape-photography-tips/photographing-cityscapes-2e.jpg'}
];

var nav = {title: 'TITLE', links: [{name:'Home', url:''}, {name:'Blog', url:''}, {name:'Contact', url:''}]}

var loadData = function(templateID, data, attachTo){
  var templateScript = $(templateID).html();
  var template = Handlebars.compile(templateScript);
  $(attachTo).append(template(data));
}

$(document).on('ready', function(){
  loadData('#article-template', articlesArray, '.page-content');
  loadData('#drawer-template', nav, '.mdl-layout__drawer');
});
