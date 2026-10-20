// Reload local assets on every page load so same-name designer exports do not stay cached.
const previewVersion = Date.now();
const assetFiles = {
  "product-19.jpg": "product-19_1000x1000.jpg",
  "09-shipping-notice.jpg": "09-shipping-notice_600x600.jpg",
  "08-coupon-notice.jpg": "08-coupon-notice_600x600.jpg",
  "store-cover.webp": "store-cover_320x160.webp",
  "product-32.jpg": "product-32_1000x1000.jpg",
  "product-33.jpg": "product-33_1000x1000.jpg",
  "product-4.jpg": "product-4_1000x1000.jpg",
  "product-34.jpg": "product-34_1000x1000.jpg",
  "product-6.jpg": "product-6_1000x1000.jpg",
  "product-7.jpg": "product-7_1000x1000.jpg",
  "category-6.jpg": "category-6_1000x1000.jpg",
  "category-19.jpg": "category-19_1000x1000.jpg",
  "07-heading-notices.jpg": "07-heading-notices_2000x300.jpg",
  "category-32.jpg": "category-32_1000x1000.jpg",
  "06-video-poster.jpg": "06-video-poster_2000x1125.jpg",
  "01-home-banner.jpg": "01-home-banner_2000x1000.jpg",
  "category-10.jpg": "category-10_1000x1000.jpg",
  "02-line-promotion.jpg": "02-line-promotion_2000x1000.jpg",
  "category-17.jpg": "category-17_1000x1000.jpg",
  "05-heading-video.jpg": "05-heading-video_2000x300.jpg",
  "04-gift-banner.jpg": "04-gift-banner_2000x1000.jpg",
  "product-10.jpg": "product-10_1000x1000.jpg",
  "category-8.jpg": "category-8_1000x1000.jpg",
  "product-9.jpg": "product-9_1000x1000.jpg",
  "product-8.jpg": "product-8_1000x1000.jpg",
  "store-logo.webp": "store-logo_320x320.webp",
  "product-17.jpg": "product-17_1000x1000.jpg",
  "03-heading-category.jpg": "03-heading-category_2000x300.jpg"
};
const imageURL = name => {
 const file = assetFiles[name] || name;
 const folder = 'assets/';
 return `${folder}${file}?preview=${previewVersion}`;
};
document.querySelectorAll('img[src^="assets/"]').forEach(img => {
 img.src = imageURL(img.getAttribute('src').split('/').pop());
});
document.documentElement.style.setProperty('--store-cover-image', `url("${imageURL('store-cover_320x160.webp')}")`);
const products=[
{id:4,name:'【全香肉酥行】招牌肉乾 50年經典傳承・香酥乾脆',price:160,rating:'5.0',sold:'9000+',sales:9000,category:'肉乾'},
{id:6,name:'【全香肉酥行】招牌純肉酥・不添加豆粉，扎實用料',price:120,rating:'4.9',sold:'2000+',sales:2000,category:'肉酥'},
{id:7,name:'【全香肉酥行】肉絲・微辣的口感（黑胡椒口味）',price:170,rating:'4.9',sold:'984',sales:984,category:'肉酥'},
{id:8,name:'【全香肉酥行】蜜汁肉乾・經典蜜香好滋味',price:170,rating:'5.0',sold:'3000+',sales:3000,category:'肉乾'},
{id:10,name:'【全香肉酥行】肉角・硬中帶Q，越嚼越香',price:160,rating:'4.9',sold:'3000+',sales:3000,category:'肉角'},
{id:9,name:'【全香肉酥行】杏仁肉乾 蒜味・琥珀紅玉',price:190,rating:'4.9',sold:'525',sales:525,category:'杏仁'},
{id:32,name:'【全香肉酥行】黑胡椒肉紙・獨特辛香料，輕度微辣',price:420,rating:'5.0',sold:'1000+',sales:1000,category:'肉紙'},
{id:19,name:'【全香肉酥行】杏仁肉乾 原味・琥珀紅玉',price:190,rating:'5.0',sold:'1000+',sales:1000,category:'杏仁'},
{id:33,name:'【全香肉酥行】招牌純肉脯・口感具嚼勁，越嚼越香',price:120,rating:'5.0',sold:'752',sales:752,category:'肉酥'},
{id:34,name:'【全香肉酥行】炙燒蜜汁條・厚切工法，鎖住肉本味',price:170,rating:'5.0',sold:'2000+',sales:2000,category:'肉乾'},
{id:17,name:'【全香肉酥行】飛捲片・一片接一片的酥脆好味',price:120,rating:'5.0',sold:'1000+',sales:1000,category:'海鮮'}
];
const categories=[{name:'肉紙',label:'香脆肉紙',id:32,en:'PORK CRISPS'},{name:'肉角',label:'嚼香肉角',id:10,en:'PORK CUBES'},{name:'肉酥',label:'招牌肉酥',id:6,en:'PORK FLOSS'},{name:'杏仁',label:'杏仁肉乾',id:19,en:'ALMOND JERKY'},{name:'肉乾',label:'經典肉乾',id:8,en:'PORK JERKY'},{name:'海鮮',label:'海味零嘴',id:17,en:'SEAFOOD SNACKS'}];
const shopURL='https://shopee.tw/shu16888';
let activeCategory='全部',searchTerm='',sort='popular';
const byId=id=>document.getElementById(id);
const card=p=>`<a class="product-card" href="${shopURL}" target="_blank" rel="noopener" title="前往全香蝦皮賣場選購：${p.name}"><img src="${imageURL(`product-${p.id}.jpg`)}" alt="${p.name}" width="320" height="320" loading="lazy"><div class="product-info"><h3 class="product-name">${p.name}</h3><div class="product-price"><small>$</small>${p.price}</div><div class="product-meta"><span class="product-rating"><b>★</b> ${p.rating}</span><span>已售出 ${p.sold}</span></div><div class="product-location">彰化縣彰化市</div></div></a>`;
byId('category-grid').innerHTML=categories.map(c=>`<button class="category-item" data-filter="${c.name}"><img src="${imageURL(`category-${c.id}.jpg`)}" alt="${c.label}" width="150" height="150" loading="lazy"><strong>${c.label}</strong></button>`).join('');
byId('featured-products').innerHTML=[4,6,8,10,32,19].map(id=>card(products.find(p=>p.id===id))).join('');
byId('promo-products').innerHTML=[6,33,17,4,8,9].map(id=>card(products.find(p=>p.id===id))).join('');
const sideLabels=[['全部','所有商品'],['新品','「新品上市 NEW」'],['肉乾','肉乾系列'],['肉酥','肉酥系列'],['肉紙','肉紙系列'],['杏仁','杏仁系列'],['肉角','肉角 / 牛肉乾'],['海鮮','海鮮系列']];
byId('side-categories').innerHTML=sideLabels.map(([v,label])=>`<button data-filter="${v}" class="${v==='全部'?'active':''}">${label}</button>`).join('');
function render(){
 let result=products.filter(p=>(activeCategory==='全部'||activeCategory==='新品'||p.category===activeCategory)&&(!searchTerm||p.name.includes(searchTerm)||p.category.includes(searchTerm)));
 if(activeCategory==='新品'||sort==='new')result.sort((a,b)=>b.id-a.id);
 if(sort==='sales')result.sort((a,b)=>b.sales-a.sales);
 if(sort==='asc')result.sort((a,b)=>a.price-b.price);
 if(sort==='desc')result.sort((a,b)=>b.price-a.price);
 byId('catalog-products').innerHTML=result.map(card).join('');
 byId('empty-state').hidden=result.length!==0;
 byId('result-count').textContent=`${result.length} 件展示商品`;
 byId('filter-description').textContent=searchTerm?`搜尋「${searchTerm}」・${result.length} 件商品`:`${activeCategory}・${result.length} 件商品`;
 document.querySelector('.filter-status').hidden=activeCategory==='全部'&&!searchTerm;
 document.querySelectorAll('#side-categories button').forEach(b=>b.classList.toggle('active',b.dataset.filter===activeCategory));
}
function browse(category){activeCategory=category;searchTerm='';byId('search-input').value='';render();document.querySelectorAll('.store-nav>button').forEach(b=>b.classList.toggle('active',b.dataset.filter===category));byId('more-menu').hidden=true;byId('more-button').setAttribute('aria-expanded','false');byId('products').scrollIntoView({behavior:'smooth',block:'start'});}
document.addEventListener('click',e=>{const f=e.target.closest('[data-filter]');if(f)browse(f.dataset.filter);const scroll=e.target.closest('[data-scroll]');if(scroll)byId(scroll.dataset.scroll).scrollIntoView({behavior:'smooth'});});
document.querySelector('[data-home]').addEventListener('click',()=>{activeCategory='全部';searchTerm='';byId('search-input').value='';render();document.querySelectorAll('.store-nav>button').forEach(b=>b.classList.toggle('active',b.hasAttribute('data-home')));window.scrollTo({top:0,behavior:'smooth'});});
byId('search-form').addEventListener('submit',e=>{e.preventDefault();searchTerm=byId('search-input').value.trim();activeCategory='全部';render();byId('products').scrollIntoView({behavior:'smooth'});});
byId('clear-filter').addEventListener('click',()=>browse('全部'));
document.querySelectorAll('[data-sort]').forEach(b=>b.addEventListener('click',()=>{sort=b.dataset.sort;byId('price-sort').value='';document.querySelectorAll('[data-sort]').forEach(x=>x.classList.toggle('active',x===b));render();}));
byId('price-sort').addEventListener('change',e=>{sort=e.target.value||'popular';document.querySelectorAll('[data-sort]').forEach(x=>x.classList.toggle('active',sort==='popular'&&x.dataset.sort==='popular'));render();});
byId('more-button').addEventListener('click',()=>{const open=byId('more-menu').hidden;byId('more-menu').hidden=!open;byId('more-button').setAttribute('aria-expanded',String(open));});
document.addEventListener('click',e=>{if(!e.target.closest('.more-nav')){byId('more-menu').hidden=true;byId('more-button').setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){byId('more-menu').hidden=true;byId('more-button').setAttribute('aria-expanded','false');}});
let toastTimer;function toast(message){clearTimeout(toastTimer);byId('toast').textContent=message;byId('toast').classList.add('visible');toastTimer=setTimeout(()=>byId('toast').classList.remove('visible'),4000);}
byId('follow-button').addEventListener('click',e=>{const followed=e.currentTarget.getAttribute('aria-pressed')==='true';e.currentTarget.setAttribute('aria-pressed',String(!followed));e.currentTarget.textContent=followed?'＋ 關注':'✓ 已關注';toast('這是展示互動；實際關注請前往正式蝦皮賣場。');});
document.querySelectorAll('.claim').forEach(b=>b.addEventListener('click',()=>{b.textContent='已領取';b.disabled=true;toast('優惠券領取效果展示；實際優惠請以蝦皮活動頁為準。');}));
let slide=0;const slides=[{image:'01-home-banner_2000x1000.jpg',alt:'一口全香，一份老滋味。彰化本舖 SINCE 1976。',link:'#products'},{image:'02-line-promotion_2000x1000.jpg',alt:'加入LINE好友，蝦皮消費滿299元，送招牌肉酥。',link:'#promotion'}];
function showSlide(n){slide=(n+slides.length)%slides.length;byId('hero-image').src=imageURL(slides[slide].image);byId('hero-image').alt=slides[slide].alt;byId('hero-link').href=slides[slide].link;document.querySelectorAll('.carousel-dots button').forEach((b,i)=>{b.classList.toggle('selected',i===slide);b.setAttribute('aria-current',String(i===slide));});}
document.querySelector('.prev').addEventListener('click',()=>showSlide(slide-1));document.querySelector('.next').addEventListener('click',()=>showSlide(slide+1));document.querySelectorAll('.carousel-dots button').forEach((b,i)=>b.addEventListener('click',()=>showSlide(i)));
render();
