function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t498_unifyHeights(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var containers=rec.querySelectorAll('.t498 .t-container');for(var i=0;i<containers.length;i++){var container=containers[i];var heightBox=0;var cols=container.querySelectorAll('.t498__col');for(var j=0;j<cols.length;j++){cols[j].style.height=''}
for(var j=0;j<cols.length;j++){var col=cols[j];var colStyle=getComputedStyle(col,null);var colPaddingTop=parseInt(colStyle.paddingTop)||0;var colPaddingBottom=parseInt(colStyle.paddingBottom)||0;var colHeight=col.clientHeight-(colPaddingTop+colPaddingBottom);var colWrap=col.querySelector('.t498__col-wrapper');var colWrapStyle=getComputedStyle(colWrap,null);var colWrapPaddingTop=parseInt(colWrapStyle.paddingTop)||0;var colWrapPaddingBottom=parseInt(colWrapStyle.paddingBottom)||0;var colWrapHeight=colWrap.clientHeight-(colWrapPaddingTop+colWrapPaddingBottom);if(colHeight<colWrapHeight){col.style.height=colWrapHeight+'px';heightBox=colWrapHeight}
if(colHeight>heightBox)heightBox=colHeight}
if(window.innerWidth>=960){for(var j=0;j<cols.length;j++){cols[j].style.height=heightBox+'px'}}else{for(var j=0;j<cols.length;j++){cols[j].style.height='auto'}}}}