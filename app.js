
const pages = {
  home: {title:"Home", render: home},
  policies: {title:"School Rules & Policies", render: policies},
  uniform1: {title:"School Uniform", render: uniform1},
  uniform2: {title:"School Uniform", render: uniform2},
  uniform3: {title:"School Uniform", render: uniform3},
  uniform4: {title:"Dress Down Days", render: uniform4},
  attendance: {title:"Attendance", render: attendance},
  environment: {title:"Environment", render: environment},
  calendar: {title:"Calendar", render: calendar},
  timetables: {title:"Time Tables", render: timetables},
  termtables: {title:"Term Time Tables", render: termtables},
  examtables: {title:"Exam Time Tables", render: examtables},
  teachers: {title:"Form Teachers", render: teachers},
  teacher11a: {title:"Form 1-1", render: ()=>teacherPage("Form 1-1")},
  teacher11b: {title:"Form 1-1", render: ()=>teacherPage("Form 1-1 ,  More Info")},
  teacher12: {title:"Form 1-2", render: ()=>teacherPage("Form 1-2")},
  teacher13: {title:"Form 1-3", render: ()=>teacherPage("Form 1-3")},
  teacher14: {title:"Form 1-4", render: ()=>teacherPage("Form 1-4")},
  teacher15: {title:"Form 1-5", render: ()=>teacherPage("Form 1-5")},
  subjects: {title:"Subjects", render: subjects},
  resources: {title:"Resource Centre", render: resources},
  parents: {title:"Parents Corner", render: parents},
  gallery: {title:"Gallery", render: gallery},
  contacts: {title:"Contacts", render: contacts}
};

const calendarData = [
["September 2026",[["7th","Students report to school."],["8th","International Literacy Day"],["22nd","P.T.A Meeting"],["25th","Jeans and Sneakers Day"]]],
["October 2026",[["1st","Teacher’s Appreciation Day"],["2nd","D.A.T Teachers’ Day (No School)"],["8th","Sports Day"],["9th","Mental Health Day (Wear Green)"],["9th","I have A Right Foundation girls brunch. Girls wear pink."],["12th","Flag Day"],["15th","Sports Day"],["16th","Afro Day"],["23rd","Creole Dress Day ,  students are to wear something Creole and a chapo (hat)."],["26th","4-H Club Expo"],["29th","Youth Rally"],["30th","Creole Day (Public Holiday)"],["30th","Midterms (Open Day) ,  report cards distributed at 12:00 p.m."]]],
["November 2026",[["3rd","Independence Day (Public Holiday)"],["4th","National Day of Community Service (Public Holiday)"],["12th","Sports Day"],["19th","Sports Day"],["20th","Universal Children's Day"],["24th","Exam Begins (See Time Table)"]]],
["December 2026",[["1st","World AIDS Day"],["2nd","Special Education Day"],["4th","End of Term 1 Exams"],["8th","School X’mas Activity"],["9th","Report Card Distribution"],["11th","School Closes for X’mas Break. Reopens on January 4th 2027."]]],
["January 2027",[["1st","New Year’s Day"],["4th","School Reopens"]]],
["February 2027",[["4th","World Cancer Day"],["8th","Carnival Monday (Public Holiday)"],["9th","Carnival Tuesday (Public Holiday)"],["10th","Ash Wednesday"],["11th","International Day of Women and Girls in Science"],["14th","Valentine’s Day"]]],
["March 2027",[["8th","International Women’s Day"],["9th","Commonwealth Day"],["12th","National Pi Day"],["19th","Education Trust Fund Contribution Day"],["24th","School CLoses for Easter Break"],["26th","Good Friday (Public Holiday) ,  World Mathematics Day"],["29th","Easter Monday (Public Holiday)"]]],
["April 2027",[["2nd","World Autism Awareness Day"],["5th","School re-opens"],["7th","World Health Day"],["22nd","Earth Day"]]],
["May 2027",[["3rd","Labour/May Day (Public Holiday)"],["17th","Pentecost Monday (Public Holiday)"]]],
["June 2027",[["7th","World food & Safety Day"],["8th","World Ocean Day"]]],
["July 2027",[["2nd","School Closes for Summer."]]]
];

const timetableLinks = [
["FORM 1-1","https://drive.google.com/file/d/12NlA7L9VCIf4_kIF1CvHAa9nxe4Y4t34/view?usp=sharing"],
["FORM 1-2","https://drive.google.com/file/d/1TlnrrT1GG7she87x8lgN4Rjq57PRHkON/view?usp=sharing"],
["FORM 1-3","https://drive.google.com/file/d/1WO7vo1UYVX_8f9ykagFXQz3MWy8pKEjM/view?usp=drive_link"],
["FORM 1-4","https://drive.google.com/file/d/11NHeCUGP3EFljgDe2vLthhUBY5v6WBqe/view?usp=sharing"],
["FORM 1-5","https://drive.google.com/file/d/1-UXPqyB3g6klhpnAWQMEUV1SRNdJa_AQ/view?usp=sharing"]
];

function go(page){
  if(!pages[page]) page="home";
  history.pushState({page},"",`#${page}`);
  renderPage(page);
}
function renderPage(page){
  const p=pages[page] || pages.home;
  document.title=`${p.title} | NECS Parent Portal`;
  document.getElementById("app").innerHTML=p.render();
  window.scrollTo({top:0,behavior:"instant"});
  document.getElementById("app").focus({preventScroll:true});
  document.querySelectorAll("[data-page]").forEach(el=>{
    el.onclick=()=>{go(el.dataset.page); closeMenu();}
  });
}
function closeMenu(){document.getElementById("nav").classList.remove("open");document.getElementById("menuBtn").setAttribute("aria-expanded","false")}
function card(page,title,desc){return `<button class="card-btn" data-page="${page}"><strong>${title}</strong><span>${desc}</span></button>`}
function back(page="home",label="← Back"){return `<div class="backrow"><button data-page="${page}">${label}</button></div>`}
function shell(title,body){
 const bannerMap={"School Rules & Policies":"policies-library-banner.jpg","School Uniform":"policies-library-banner.jpg","Dress Down Days":"policies-library-banner.jpg","Attendance":"policies-library-banner.jpg","Environment":"school-garden-banner.jpg","School Calendar":"calendar-events-banner.jpg","Time Tables":"calendar-events-banner.jpg","Term Time Tables":"calendar-events-banner.jpg","Exam Time Tables":"calendar-events-banner.jpg","Form Teachers":"form-teachers-classroom-banner.jpg","Subjects":"resource-centre-books-banner.jpg","Resource Centre":"resource-centre-books-banner.jpg","Parents Corner":"parents-corner-banner.jpg","Gallery":"sports-banner.jpg","Contacts":"form-teachers-classroom-banner.jpg"};
 const banner=bannerMap[title]||"home-campus-banner.jpg";
 return `<div>${back()}<section class="hero page-hero" style="--page-banner:url('assets/banners/${banner}')"><div><p class="page-hero-kicker">NORTH EAST COMPREHENSIVE</p><h1>${title}</h1><p class="page-hero-subtitle">Education is freedom. Embrace it!</p></div></section>${body}</div>`
}


// Countdown dates are maintained here by the portal administrator.
const schoolCountdownDates = { examsStart: "2026-11-24", termEnds: "2026-12-11", schoolReopens: "2027-01-04" };
function countdownDate(iso){const p=iso.split("-").map(Number);return new Date(p[0],p[1]-1,p[2]);}
function countdownDays(target,today){return Math.max(0,Math.ceil((target-today)/86400000));}
function countdownCard(title,target,today,icon,tone){const days=countdownDays(target,today);const dateLabel=target.toLocaleDateString("en",{month:"long",day:"numeric",year:"numeric"});const amount=days===0?"Today":days;const unit=days===0?"":days===1?"day remaining":"days remaining";const message=days===0?"Today, "+dateLabel:amount+" "+unit+" until "+dateLabel;return '<article class="countdown-card countdown-'+tone+'"><span class="countdown-icon" aria-hidden="true">'+icon+'</span><div class="countdown-copy"><span class="countdown-label">'+title+'</span><strong class="countdown-message">'+message+'</strong></div></article>';}
function schoolCountdowns(){const now=new Date();now.setHours(0,0,0,0);const exams=countdownDate(schoolCountdownDates.examsStart);const end=countdownDate(schoolCountdownDates.termEnds);const reopen=countdownDate(schoolCountdownDates.schoolReopens);const ended=now>end;const cards=[];if(!ended&&now<=exams)cards.push(countdownCard("Days Until Exams Begin",exams,now,"✎","exam"));if(!ended&&now<=end)cards.push(countdownCard("Days Until the Term Ends",end,now,"▣","term"));if(ended&&now<reopen)cards.push(countdownCard("Days Until School Reopens",reopen,now,"⌂","reopen"));if(!cards.length&&now>=reopen)cards.push('<article class="countdown-card countdown-reopen"><span class="countdown-icon" aria-hidden="true">⌂</span><div class="countdown-copy"><span class="countdown-label">School Is Back</span><strong class="countdown-number">Welcome back!</strong><span class="countdown-date">Have a great term.</span></div></article>');return '<section class="school-countdowns" aria-label="School date countdowns">'+cards.join("")+'</section>';}

function home(){
 const quickLinks = [
   ["policies","policies.svg","School Policies","School rules and guidelines"],
   ["calendar","calendar.svg","Calendar & Events","Important dates and events"],
   ["timetables","time-tables.svg","Time Tables","Class schedules and timetables"],
   ["teachers","form-teachers.svg","Form Teachers","Meet your child’s form teacher"],
   ["subjects","subjects.svg","Subjects","Subjects taught in each form"],
   ["resources","resource-centre.svg","Resource Centre","Learning support and resources"],
   ["parents","parents-corner.svg","Parents Corner","Support, advice and feedback"],
   ["gallery","gallery.svg","Gallery","Photos and school moments"],
   ["contacts","contact.svg","Contact the School","Get in touch with us"]
 ];
 return `<section class="home-hero mockup-hero">
   <div class="hero-copy"><span class="welcome-tag">WELCOME, PARENTS &amp; GUARDIANS</span><h1>Welcome to the<br><span>NECS Parent Portal</span></h1><p class="motto">Education is freedom. Embrace it!</p><p>Your Form 1 family hub for school information, important dates, timetables and teacher contacts.</p><button class="hero-cta" data-page="subjects">Explore Parent Resources <span aria-hidden="true">→</span></button></div>
   <div class="hero-art mockup-hero-art" role="img" aria-label="Campus banner image"></div>
 </section>
 <section class="home-intro"><div><span class="eyebrow">YOUR SCHOOL, AT A GLANCE</span><h2>Everything you need, in one place</h2><div class="intro-underline"></div></div><p>Quick access to the information that helps you stay connected and prepared throughout the school year.</p></section>
 <div class="grid home-grid mockup-home-grid">${quickLinks.map(([page,icon,title,desc])=>`<button class="card-btn mockup-link-card" data-page="${page}"><span class="mockup-icon" aria-hidden="true"><img src="assets/icons/${icon}" alt=""></span><strong>${title}</strong><span>${desc}</span><span class="mockup-card-arrow" aria-hidden="true">↗</span></button>`).join("")}</div>
 <section class="announcements-panel"><div class="announcements-heading"><div><span class="eyebrow">STAY IN THE LOOP</span><h2>Announcements &amp; Upcoming Events</h2></div><button class="text-button" data-page="calendar">View Full Calendar →</button></div>${schoolCountdowns()}<div class="announcement-list">${getUpcomingItems(5).map(e=>`<article class="announcement-item"><span class="announcement-date">${e.date}</span><div><strong>${e.title}</strong><p>${e.type}</p>${e.details?'<p class="announcement-details">'+e.details+'</p>':""}</div></article>`).join("")}</div></section><section class="home-note mockup-note"><span class="note-icon" aria-hidden="true">⌁</span><div><strong>Stay connected with your child’s school journey.</strong><p>Check the calendar, read the latest updates and explore helpful resources.</p></div><span class="note-leaves" aria-hidden="true">❧</span></section>`;
}


function policies(){
 return shell("School Rules & Policies",`<div class="grid">
   ${card("uniform1","School Uniform","General uniform requirements")}
   ${card("attendance","Attendance","Attendance and punctuality guidance")}
   ${card("environment","Environment","Keeping the school compound and classrooms clean")}
 </div>`);
}
function uniform1(){return shell("School Uniform",`<div class="card"><h2>Boys</h2><ul class="list"><li>Long khaki pants (loosely fitted)</li><li>White shirt</li><li>Leather like belt</li><li>Plain black or brown dress shoes</li></ul><h2>Girls</h2><ul class="list"><li>Khaki Skirt</li><li>White shirt</li><li>Brown knee length socks</li><li>Black or Brown shoes</li></ul></div><div class="backrow" style="margin-top:14px"><button data-page="uniform2">Next →</button></div>`)}
function uniform2(){return shell("School Uniform",`<div class="card"><h2>Sports Uniform</h2><ul class="list"><li>Black pants with school name and logo and Coloured House Shirt</li><li>A decent pair of sneakers</li><li>White socks</li></ul><h2>Hair</h2><ul class="list"><li>No hair extensions, artificial hair, beads, colors, tints, or elaborate styles for girls</li><li>Well-groomed and flat cuts for boy with no designs</li><li>Clips, bands and ribbons must be in the colour in which conforms to the school uniform.</li></ul></div><div class="backrow" style="margin-top:14px"><button data-page="uniform1">← Previous</button><button data-page="uniform3">Next →</button></div>`)}
function uniform3(){return shell("School Uniform",`<div class="card"><h2>Jewelry</h2><ul class="list"><li>No earrings for boys</li><li>A simple pair of gold or silver earrings for girls</li><li>A simple wristwatch may be worn by all students.</li><li>No chains, rings, bracelets or hand bands.</li><li>No pins or badges except those given by the school may be worn.</li></ul></div><div class="backrow" style="margin-top:14px"><button data-page="uniform2">← Previous</button><button data-page="uniform4">Next →</button></div>`)}
function uniform4(){return shell("Dress Down Days",`<div class="card"><p>Announcements will be given in reference to dress code for specific events. However on these days the following must be adhered to:</p><ul class="list"><li>No distressed jeans (Both Male and Female students)</li><li>No sleeveless, shorts, back-outs or midriff revealing outfits.</li></ul></div><div class="backrow" style="margin-top:14px"><button data-page="uniform3">← Previous</button></div>`)}
function attendance(){return shell("Attendance",`<div class="card"><p>Regular punctual attendance is the key to success.</p><ul class="list"><li>Make attendance and punctuality a priority. Encourage your son/daughter to attend school everyday and be on time.</li><li>Contact the school by <strong>8:30 a.m.</strong> on any day when he/she is unable to attend school.</li><li>Please telephone the school numbers: <a href="tel:+17672853494">285-3494</a> / <a href="tel:+17672664994">264-994</a>.</li><li>Inform us if your son/daughter is going to be absent or is in incomplete uniform. If he/she is ill for three or more days, a medical certificate must be presented.</li><li>Keep the school's records up to date. Please ensure that home/work/cell or emergency telephone numbers, and contact details are kept current and that we are informed of any changes.</li><li>Inform us promptly if there is any problem or matter of concern which may affect the attendance of your son/daughter.</li></ul></div>`)}
function environment(){return shell("Environment",`<div class="card"><ul class="list"><li>Students should NOT litter on the school compound.</li><li>Students should keep their classroom clean at ALL times.</li></ul></div>`)}
let calendarView = new Date(2026, 9, 1);
let selectedCalendarDay = null;
function eventDetails(title){if(title.startsWith("Creole Dress Day"))return "Students are to wear something Creole and a chapo (hat).";if(title.startsWith("Creole Day"))return "Door decoration competition: each form level decorates its classroom door; the best decorated door wins one point. Performance: each form class is to prepare and present a performance for Creole Day.";if(/Midterms \(Open Day\)/i.test(title))return "Report cards will be distributed at 12:00 p.m. on Creole Day.";if(/Youth Rally|4-H Club Expo|Mid terms/i.test(title))return "";return "";}
function getUpcomingItems(limit=5){const today=new Date();today.setHours(0,0,0,0);const list=[];calendarData.forEach(([label,items])=>{const p=parseCalendarMonth(label);items.forEach(([day,title])=>{const d=new Date(p.year,p.month,parseInt(day,10));if(d>=today)list.push({d,title,details:eventDetails(title),type:/public holiday|carnival|christmas|new year|valentine|pi day|creole day|creole dress day|youth rally|4-h club|mid terms/i.test(title)?"School Event / Announcement":"School Announcement"});});});for(let y=Math.max(2026,today.getFullYear());y<=2031;y++){[[0,1,"New Year’s Day"],[1,14,"Valentine’s Day"],[2,14,"Pi Day"],[9,16,"World Food Day"],[11,25,"Christmas Day"]].forEach(([m,d,title])=>{const date=new Date(y,m,d);if(date>=today&&!list.some(x=>x.d.getTime()===date.getTime()&&x.title===title))list.push({d:date,title,type:"Annual Observance"});});}return list.sort((a,b)=>a.d-b.d).slice(0,limit).map(x=>({...x,date:x.d.toLocaleDateString("en",{month:"short",day:"numeric",year:"numeric"})}));}
function parseCalendarMonth(label){
 const bits=label.split(" ");
 return {month:new Date(bits[0]+" 1, "+bits[1]).getMonth(),year:Number(bits[1])};
}
function calendarCategory(title){
 const t=title.toLowerCase();
 if(/school reopens|school opens|school closes|school closing|school open|re-opens|reopens|term begins|term ends|closes for .*break|reopens on/.test(t)) return {key:"term",label:"School dates",color:"#D97706"};
 if(/public holiday|creole day|carnival|good friday|easter monday|labour\/may day|labour day|pentecost monday|whit monday|emancipation day|independence day|community service day|new year’s day|new year's day|boxing day|christmas day/.test(t)) return {key:"holiday",label:"Public holiday",color:"#8B5CF6"};
 if(/exam|mid terms|assessment|test/.test(t)) return {key:"exam",label:"Examinations",color:"#DC4545"};
 if(/sports|athletic|sports day/.test(t)) return {key:"sports",label:"Sports & athletics",color:"#2563EB"};
 if(/p\.t\.a|parent|community|meeting|open day|brunch/.test(t)) return {key:"community",label:"Parent & community",color:"#0F766E"};
 if(/break/.test(t)) return {key:"break",label:"School break",color:"#B7791F"};
 if(/valentine|pi day|world |international |literacy|flag day|afro day|creole day|ash wednesday|education trust|teacher’s appreciation|teachers’ day/.test(t)) return {key:"observance",label:"Observance",color:"#64748B"};
 return {key:"school",label:"School event",color:"#087E83"};
}
const publicHolidayData = [
 ["2027-01-01","New Year’s Day","holiday"],["2027-02-08","Carnival Monday","holiday"],["2027-02-09","Carnival Tuesday","holiday"],["2027-03-26","Good Friday","holiday"],["2027-03-29","Easter Monday","holiday"],["2027-05-03","Labour Day / May Day","holiday"],["2027-05-17","Whit Monday","holiday"],["2027-08-02","Emancipation Day","holiday"],["2027-11-03","Independence Day","holiday"],["2027-11-04","National Day of Community Service","holiday"],["2027-12-25","Christmas Day","holiday"],["2027-12-26","Boxing Day","holiday"],["2027-12-27","Boxing Day ,  observed day off","holiday"],
 ["2028-01-01","New Year’s Day","holiday"],["2028-01-03","New Year’s Day ,  observed day off","holiday"],["2028-02-28","Carnival Monday","holiday"],["2028-02-29","Carnival Tuesday","holiday"],["2028-04-14","Good Friday","holiday"],["2028-04-17","Easter Monday","holiday"],["2028-05-01","Labour Day / May Day","holiday"],["2028-06-05","Whit Monday","holiday"],["2028-08-07","Emancipation Day","holiday"],["2028-11-03","Independence Day","holiday"],["2028-11-04","National Day of Community Service","holiday"],["2028-12-25","Christmas Day","holiday"],["2028-12-26","Boxing Day","holiday"],
 ["2029-01-01","New Year’s Day","holiday"],["2029-02-12","Carnival Monday","holiday"],["2029-02-13","Carnival Tuesday","holiday"],["2029-03-30","Good Friday","holiday"],["2029-04-02","Easter Monday","holiday"],["2029-05-01","Labour Day / May Day (date to confirm)","holiday"],["2029-05-21","Whit Monday","holiday"],["2029-08-06","Emancipation Day","holiday"],["2029-11-03","Independence Day","holiday"],["2029-11-05","National Day of Community Service ,  observed day (confirm officially)","holiday"],["2029-12-25","Christmas Day","holiday"],["2029-12-26","Boxing Day","holiday"],
 ["2030-01-01","New Year’s Day","holiday"],["2030-03-04","Carnival Monday","holiday"],["2030-03-05","Carnival Tuesday","holiday"],["2030-04-19","Good Friday","holiday"],["2030-04-22","Easter Monday","holiday"],["2030-05-06","Labour Day / May Day (confirm officially)","holiday"],["2030-06-10","Whit Monday","holiday"],["2030-08-05","Emancipation Day","holiday"],["2030-11-03","Independence Day","holiday"],["2030-11-04","Independence Day ,  observed day off (confirm officially)","holiday"],["2030-11-04","National Day of Community Service (date to confirm)","holiday"],["2030-12-25","Christmas Day","holiday"],["2030-12-26","Boxing Day","holiday"],
 ["2031-01-01","New Year’s Day","holiday"],["2031-02-24","Carnival Monday","holiday"],["2031-02-25","Carnival Tuesday","holiday"],["2031-04-11","Good Friday","holiday"],["2031-04-14","Easter Monday","holiday"],["2031-05-05","Labour Day / May Day (date to confirm)","holiday"],["2031-06-02","Whit Monday","holiday"],["2031-08-04","Emancipation Day","holiday"],["2031-11-03","Independence Day","holiday"],["2031-11-04","National Day of Community Service","holiday"],["2031-12-25","Christmas Day","holiday"],["2031-12-26","Boxing Day","holiday"]
].map(([date,title,category])=>({date,title,category}));
function getCalendarEvents(year,month){
 const events=[];
 const existing=calendarData.find(([label])=>{const p=parseCalendarMonth(label);return p.month===month&&p.year===year;});
 if(existing) existing[1].forEach(([day,title],i)=>events.push({day:parseInt(day,10),title,id:"existing-"+i,category:calendarCategory(title)}));
 publicHolidayData.forEach((e,i)=>{const d=new Date(e.date+"T12:00:00");if(d.getFullYear()===year&&d.getMonth()===month&&!events.some(x=>x.day===d.getDate()&&x.title===e.title))events.push({day:d.getDate(),title:e.title,id:"holiday-"+i,category:calendarCategory(e.title)});});
 const annual=[[1,14,"Valentine’s Day"],[2,14,"Pi Day"],[9,16,"World Food Day"]];
 annual.forEach(([m,d,title],i)=>{if(m===month&&!events.some(x=>x.day===d&&x.title===title))events.push({day:d,title,id:"annual-"+i,category:calendarCategory(title)});});
 // School reopening dates follow the school-provided first-Monday rule for January and September.
 if(month===0||month===8){let firstDay=new Date(year,month,1).getDay();let firstMonday=firstDay===1?1:((8-firstDay)%7)+1;if(!events.some(x=>x.day===firstMonday&&x.category.key==="term"))events.push({day:firstMonday,title:"School Reopens (confirm against official term dates)",id:"school-reopen-"+year+"-"+month,category:calendarCategory("School Reopens")});}
 if(month===2){const common=new Date(year,2,1);const mondayCount=common.getDay()===1?1:((8-common.getDay())%7)+1;const secondMonday=mondayCount+7;if(!events.some(x=>x.day===secondMonday&&/Commonwealth Day/.test(x.title)))events.push({day:secondMonday,title:"Commonwealth Day",id:"commonwealth",category:calendarCategory("Commonwealth Day")});}
 return events.sort((a,b)=>a.day-b.day);
}
function calendar(){
 const {month,year}={month:calendarView.getMonth(),year:calendarView.getFullYear()};
 const monthName=calendarView.toLocaleString("en",{month:"long"});
 const events=getCalendarEvents(year,month);
 const firstDay=new Date(year,month,1).getDay(),daysInMonth=new Date(year,month+1,0).getDate(),cells=[];
 for(let i=0;i<firstDay;i++)cells.push('<div class="cal-day cal-blank" aria-hidden="true"></div>');
 for(let day=1;day<=daysInMonth;day++){
  const todays=events.filter(e=>e.day===day);
  cells.push('<button class="cal-day '+(todays.length?'has-events ':'')+(selectedCalendarDay===day?'is-selected':'')+'" data-cal-day="'+day+'" aria-label="'+monthName+' '+day+', '+todays.length+' events"><span class="cal-date">'+day+'</span>'+todays.slice(0,2).map(e=>'<span class="cal-event-dot cal-category-'+e.category.key+'" title="'+e.category.label+'">'+e.title+'</span>').join('')+(todays.length>2?'<span class="cal-more">+'+(todays.length-2)+' more</span>':'')+'</button>');
 }
 const selected=selectedCalendarDay===null?null:events.filter(e=>e.day===selectedCalendarDay);
 const legend=[["holiday","Public holidays","#8B5CF6"],["sports","Sports & athletics","#2563EB"],["school","General school events","#087E83"],["term","School opening / closing","#D97706"],["exam","Examinations","#DC4545"],["community","Parent & community","#0F766E"],["observance","General observances","#64748B"],["break","School breaks","#B7791F"]];
 return shell("School Calendar",schoolCountdowns()+'<section class="calendar-panel"><div class="calendar-toolbar"><button class="cal-nav" data-cal-shift="-1" aria-label="Previous month">‹</button><div class="calendar-heading"><h2>'+monthName+' '+year+'</h2><p>School Year: '+(month>=8?year+" to "+(year+1):year+" to "+(year+1))+'</p></div><button class="cal-nav" data-cal-shift="1" aria-label="Next month">›</button></div><div class="calendar-selectors"><label>Month <select id="calMonth">'+Array.from({length:12},(_,i)=>'<option value="'+i+'" '+(i===month?'selected':'')+'>'+new Date(2026,i,1).toLocaleString("en",{month:"long"})+'</option>').join('')+'</select></label><label>Year <select id="calYear">'+Array.from({length:6},(_,i)=>2026+i).map(y=>'<option value="'+y+'" '+(y===year?'selected':'')+'>'+y+'</option>').join('')+'</select></label></div><div class="calendar-grid"><div class="cal-weekday">Sun</div><div class="cal-weekday">Mon</div><div class="cal-weekday">Tue</div><div class="cal-weekday">Wed</div><div class="cal-weekday">Thu</div><div class="cal-weekday">Fri</div><div class="cal-weekday">Sat</div>'+cells.join('')+'</div><div class="calendar-legend calendar-category-legend">'+legend.map(([key,label,color])=>'<span class="legend-item"><i class="legend-swatch cal-category-'+key+'" aria-hidden="true"></i>'+label+'</span>').join('')+'<small>Dates and term times are to be confirmed against the Government of Dominica or Ministry of Education official calendar.</small></div>'+(selected?'<section class="selected-events"><h3>'+monthName+' '+selectedCalendarDay+'</h3>'+(selected.length?'<ul>'+selected.map(e=>'<li><span class="event-category-label cal-category-'+e.category.key+'">'+e.category.label+'</span> '+e.title+(eventDetails(e.title)?'<p class="calendar-event-details">'+eventDetails(e.title)+'</p>':'')+'</li>').join('')+'</ul>':'<p>No events listed for this date.</p>')+'</section>':'<p class="calendar-hint">Select a date to see event details.</p>')+'<div class="calendar-footer"><button class="text-button" data-cal-today="1">Back to October 2026</button></div></section>');
}

function timetables(){return shell("Time Tables",`<div class="grid">${card("termtables","TERM","Click on the form class to access the term timetable.")}${card("examtables","EXAM","Access the exam timetable section.")}</div>`)}
function termtables(){return shell("Term Time Tables",`<div class="card"><p>Click on the buttons to access the time table.</p><div class="grid">${timetableLinks.map(([n,u])=>`<a class="external" href="${u}" target="_self">${n} ↗</a>`).join("")}</div><p class="small">If you are unable to access your timetable, please contact Ms. M. John-Baptiste for assistance.</p></div>`)}
function examtables(){return shell("Exam Time Tables",`<div class="card exam-under-construction"><h2>Exam Timetables Under Construction</h2><p>Exam timetable information is not yet available. This section will be updated as soon as the school releases the confirmed timetables.</p></div>`)}
function teachers(){return shell("Form Teachers",`<div class="card"><p>Meet the Form 1 teachers at North East Comprehensive. Select a class to view teacher contact details and information.</p></div><div class="grid">${["1-1","1-2","1-3","1-4","1-5"].map(n=>card(n==="1-1"?"teacher11a":"teacher"+n.replace("-",""),"FORM "+n,n==="1-1"?"Ms. Paul and Ms. Augustine":({"1-2":"Mrs. Toussaint","1-3":"Ms. M. John Baptiste","1-4":"Ms. Russel","1-5":"Ms. Royer"}[n]))).join("")}</div>`)}
function teacherPage(name){
 const form=name.replace(" ,  More Info","");
 const teachersByForm={
  "Form 1-1":[{name:"Ms. Paul"},{name:"Ms. Augustine"}],
  "Form 1-2":[{name:"Mrs. Toussaint"}],
  "Form 1-3":[{name:"Ms. M. John Baptiste",phone:"+1 (767) 285-0530",preferred:"Text message (SMS)",subjects:"Mathematics and Information Technology",info:"N/A"}],
  "Form 1-4":[{name:"Ms. Russel"}],
  "Form 1-5":[{name:"Ms. Royer"}]
 };
 const people=teachersByForm[form]||[];
  const avatar=form==="Form 1-3"?"assets/form-teachers/form-1-3/ms-m-john-baptiste.jpg":"assets/teacher-placeholder.svg";
 return shell(form+" Form Teachers",`<div class="teacher-list">${people.map(t=>`<article class="card person"><img class="teacher-avatar" src="${avatar}" alt="" ${form==="Form 1-3"?"":"aria-hidden=\"true\""}><div class="teacher-details"><p class="eyebrow">${form}</p><h2>${t.name} ${t.status?`<span class="contact-tba">(${t.status})</span>`:""}</h2><p><strong>Contact Number:</strong> ${t.phone?`<a href="tel:+17672850530">${t.phone}</a>`:"N/A"}</p><p><strong>Preferred Contact Mode:</strong> ${t.preferred||"N/A"}</p><p><strong>Subjects Taught:</strong> ${t.subjects||"N/A"}</p><p><strong>Additional Information:</strong> ${t.info||"N/A"}</p></div></article>`).join("")}</div><div class="backrow" style="margin-top:14px"><button data-page="teachers">← All Form Teachers</button></div>`);
}


let selectedSubjectClass = "1-1";
const subjectsByClass = {
 "1-1": [
  ["Mathematics","Ms. J James"],
  ["English A","TBD"],
  ["Integrated Science","Ms. S Remy"],
  ["Social Studies","Ms. T Augustine"],
  ["French/Spanish","Ms I Pierre-Louise"],
  ["Literature","Ms T Hyacinth"],
  ["Agriculture","Ms G Paul"],
  ["Physical Education","Ms M Dennis"],
  ["Business Studies","Ms F Edwards"],
  ["Food and Nutrition","Ms J Russel"],
  ["ICT","Ms S Edwards"],
  ["HFLE","Miss Rolle"]
 ],
 "1-2": [
  ["Mathematics","Ms M John Baptiste"],
  ["English A","Ms P Henry"],
  ["Integrated Science","Ms S Remy"],
  ["Social Studies","Ms D Nelson"],
  ["French/Spanish","Ms S Davis"],
  ["Literature","Ms T Hyacinth"],
  ["Agriculture","Ms C Valmond"],
  ["Physical Education","Ms J Phillip"],
  ["Business Studies","Ms F Edwards"],
  ["Food and Nutrition","Ms J Harney"],
  ["ICT","Ms S Edwards"],
  ["HFLE","Miss M. Honoré"]
 ],
 "1-3": [
  ["Mathematics","Ms J George"],
  ["English A","Ms T Matthew"],
  ["Integrated Science","Ms S Remy"],
  ["Social Studies","Ms T Augustine"],
  ["French/Spanish","TBD"],
  ["Literature","Ms T Hyacinth"],
  ["Agriculture","Ms J Russel"],
  ["Physical Education","Ms M Dennis"],
  ["Business Studies","Ms F Edwards"],
  ["Food and Nutrition","Ms J Russel"],
  ["ICT","Ms S Edwards"],
  ["HFLE","Miss I. Pierre-Louis"]
 ],
 "1-4": [
  ["Mathematics","Ms J George"],
  ["English A","Ms P Henry"],
  ["Integrated Science","Ms S Remy"],
  ["Social Studies","Ms M Honore"],
  ["Agriculture","Ms G Paul"],
  ["Physical Education","Ms M Dennis"],
  ["HFLE","Miss Rolle"],
  ["Food and Nutrition","Ms G Gordon"],
  ["ICT","Ms S Edwards"],
  ["RC","Ms P Henry"],
  ["Mental Maths","TBD"]
 ],
 "1-5": [
  ["Mathematics","Mrs Daniel & Ms Jones"],
  ["English A","Ms Jones"],
  ["Integrated Science","Ms C Thomas"],
  ["Social Studies","Ms M Honore"],
  ["Agriculture","Ms J Russel"],
  ["Physical Education","Ms Dennis"],
  ["HFLE","Miss Rolle"],
  ["Food and Nutrition","Ms J Russel"],
  ["ICT","Ms S Edwards"],
  ["RC","Ms M Honore"],
  ["Mental Maths","Mr Sablon"]
 ]
};
function subjectIcon(subject){const icons={"Mathematics":"∑","English A":"Aa","Integrated Science":"⚗","Social Studies":"🌍","French/Spanish":"文","Literature":"📚","Agriculture":"🌱","Physical Education":"⚽","Business Studies":"▤","Food and Nutrition":"🍎","ICT":"⌘","HFLE":"♡","RC":"✦","Mental Maths":"√"};return `<span class="subject-icon" aria-hidden="true">${icons[subject]||"✦"}</span>`}
function subjects(){
 const rows = subjectsByClass[selectedSubjectClass] || [];
 return shell("Subjects",`<section class="subjects-panel">
   <div class="subjects-intro"><span class="eyebrow">FORM 1 CURRICULUM</span><h2>Subjects and Teachers</h2><p>Select your child’s form class to view each subject and its assigned teacher.</p></div>
   <div class="subject-class-tabs" role="tablist" aria-label="Choose form class">
    ${["1-1","1-2","1-3","1-4","1-5"].map(n=>`<button type="button" role="tab" aria-selected="${selectedSubjectClass===n}" class="subject-class-tab ${selectedSubjectClass===n?"active":""}" data-subject-class="${n}">Form ${n}</button>`).join("")}
   </div>
   <div class="subject-table-wrap">
    <div class="subject-table-head subject-table-head-three"><span>CLASS</span><span>SUBJECT</span><span>TEACHERS</span></div>
    <div class="subject-rows">${rows.map(([subject,teacher],i)=>`<div class="subject-row subject-row-three"><span class="subject-class-label">1-${selectedSubjectClass.split("-")[1]}</span><span class="subject-name"><span class="subject-index">${String(i+1).padStart(2,"0")}</span>${subjectIcon(subject)}${subject}</span><span class="subject-teacher ${teacher==="TBD"?"teacher-tbd":""}">${teacher}</span></div>`).join("")}</div>
   </div>
   <p class="subjects-footnote"><span aria-hidden="true">✦</span> Teacher assignments are shown as supplied by the school. Items marked TBD are awaiting confirmation.</p>
  </section>`)
}
function resources(){return shell("Resource Centre",`<div class="card"><h2>Helpful Learning Links</h2><p>Quick links to online tools families may use to support learning at home.</p><div class="resource-link-list"><div class="resource-link-item"><p><strong>Google Classroom</strong></p><p>Access your child’s Google Classroom for classwork, assignments and learning materials.</p><a class="external" href="https://classroom.google.com/" target="_self">Open Google Classroom ↗</a></div><div class="resource-link-item"><p><strong>Student Grades and Progress</strong></p><p>View your child’s grades and academic progress through the Ministry of Education student portal.</p><a class="external" href="https://s.education.gov.dm/index.php" target="_self">View Grades and Progress ↗</a></div></div></div>`)}
function parents(){return shell("Parents Corner",`<section class="construction-banner"><div><h2>This Page Is Under Construction</h2><p>We are preparing helpful information and resources for parents and guardians. Please check back soon.</p></div></section>`)}
function gallery(){return shell("Gallery",`<div class="card"><p>Browse the school gallery below if the folder is shared for public viewing.</p><div class="drive-gallery"><iframe title="North East Comprehensive school photo gallery" src="https://drive.google.com/embeddedfolderview?id=1MvEDMFkPHQyNJMdPZuilXjA-zkyKZstV#grid" loading="lazy" referrerpolicy="no-referrer"></iframe></div><p><a class="external" href="https://drive.google.com/drive/folders/1MvEDMFkPHQyNJMdPZuilXjA-zkyKZstV?usp=drive_link" target="_self">OPEN FULL GALLERY ↗</a></p><p class="small">The embedded gallery only appears when the folder and images are shared for viewing. If it is blank or requests sign-in, use the link above or adjust the Google Drive sharing permissions.</p></div>`)}
function contacts(){return shell("Contacts",`<div class="card"><h2>Important Contacts</h2><p><strong>School Office</strong><br><a href="tel:+17672853494">+1 (767) 285-3494</a><br><a href="tel:+17672664994">+1 (767) 266-4994</a></p><hr><h3>Year Head</h3><p>Ms. J Russel <span class="contact-tba">(TBA)</span></p><hr><h3>Form Teachers</h3><div class="contact-teacher-row"><span class="contact-class">1-1</span><div class="contact-teacher-names"><span>Ms. Paul <span class="contact-tba">(TBA)</span></span><span>Ms. Augustine <span class="contact-tba">(TBA)</span></span></div></div><div class="contact-teacher-row"><span class="contact-class">1-2</span><div class="contact-teacher-names"><span>Mrs. Toussaint <span class="contact-tba">(TBA)</span></span></div></div><div class="contact-teacher-row"><span class="contact-class">1-3</span><div class="contact-teacher-names"><span>Ms. M. John-Baptiste</span><span><a href="tel:+17672850530">+1 (767) 285-0530</a> <em>(Preferred to Text)</em></span></div></div><div class="contact-teacher-row"><span class="contact-class">1-4</span><div class="contact-teacher-names"><span>Ms. Russel <span class="contact-tba">(TBA)</span></span></div></div><div class="contact-teacher-row"><span class="contact-class">1-5</span><div class="contact-teacher-names"><span>Ms. Royer <span class="contact-tba">(TBA)</span></span></div></div></div>`)}


document.getElementById("menuBtn").onclick=()=>{
 const n=document.getElementById("nav"), open=n.classList.toggle("open");
 document.getElementById("menuBtn").setAttribute("aria-expanded",open?"true":"false");
};
window.addEventListener("popstate",()=>renderPage(location.hash.slice(1)||"home"));
document.addEventListener("click",e=>{
 const el=e.target.closest("[data-page]");
 if(el){ e.preventDefault(); go(el.dataset.page); }
});
document.addEventListener("click",e=>{
 const shift=e.target.closest("[data-cal-shift]");
 if(shift){calendarView.setMonth(calendarView.getMonth()+Number(shift.dataset.calShift));selectedCalendarDay=null;renderPage("calendar");return;}
 const day=e.target.closest("[data-cal-day]");
 if(day){const scrollY=window.scrollY;selectedCalendarDay=Number(day.dataset.calDay);renderPage("calendar");window.scrollTo({top:scrollY,behavior:"instant"});return;}
 if(e.target.closest("[data-cal-today]")){calendarView=new Date(2026,9,1);selectedCalendarDay=null;renderPage("calendar");}
});
document.addEventListener("change",e=>{
 if(e.target.id==="calMonth"||e.target.id==="calYear"){
  const m=document.getElementById("calMonth"),y=document.getElementById("calYear");
  calendarView=new Date(Number(y.value),Number(m.value),1);selectedCalendarDay=null;renderPage("calendar");
 }
});
renderPage(location.hash.slice(1)||"home");

document.addEventListener("click",e=>{
 const tab=e.target.closest("[data-subject-class]");
 if(tab){
  selectedSubjectClass=tab.dataset.subjectClass;
  renderPage("subjects");
 }
});
