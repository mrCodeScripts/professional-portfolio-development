"use strict";
const lang_experties = document.querySelectorAll(".developer-lang-experties ul .icons");
const svg_lang_exp = document.querySelector(".main-introduction-svg-animation");
const prog_line_svg = document.querySelectorAll(".main-introduction-svg-animation .m-i-svg");
const prog_lang_obs = new IntersectionObserver((e) => {
  e.forEach((el) => {
    if (el.isIntersecting) {
      el.target.classList.add("icon-show-lang");
      el.target.classList.remove("hide");
      svg_lang_exp.classList.add("show");
      svg_lang_exp.classList.add("activate-main-intro-animation");
      svg_lang_exp.classList.remove("deactivate-main-intro-animation");
      svg_lang_exp.classList.remove("hide");
    } else {
      el.target.classList.remove("icon-show-lang"); 
      el.target.classList.add("hide")
      svg_lang_exp.classList.remove("show");
      svg_lang_exp.classList.remove("activate-main-intro-animation");
      svg_lang_exp.classList.add("deactivate-main-intro-animation");
      svg_lang_exp.classList.add("hide");
    }
   })
});
lang_experties.forEach(i => prog_lang_obs.observe(i));
const w_i_l = document.querySelector("#work-immersion-letter .work-immersion-letter-innerwrapper");
const w_i = document.getElementById("work-immersion-letter");
const m_i_svg_anim = document.getElementById("main-information-svg");
const m_i_svg_anim_1 = document.querySelector("#main-information-svg #m-i-1");
const info_obs = new IntersectionObserver((e) => {
  e.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add("activate-information");
      w_i.classList.add("active-info-shadow");
      m_i_svg_anim_1.classList.add("activate-main-info-animation");
      m_i_svg_anim_1.classList.remove("deactivate-main-info-animation");
      m_i_svg_anim.classList.add("show");
      m_i_svg_anim.classList.remove("hide");
    } else {
      el.target.classList.remove("activate-information");
      w_i.classList.remove("active-info-shadow");
      m_i_svg_anim_1.classList.remove("activate-main-info-animation");
      m_i_svg_anim_1.classList.add("deactivate-main-info-animation");
      m_i_svg_anim.classList.remove("show");
      m_i_svg_anim.classList.add("hide");
    }
  });
});
info_obs.observe(w_i_l);
const inf = document.querySelectorAll(".inf-bx");
const inf_svg = document.querySelectorAll(".inf-bx .inf-svg-animations");
const inf_bx = new IntersectionObserver((e) => {
  e.forEach((ei) => {
    if (ei.isIntersecting) {
      ei.target.classList.add("activate-inf-bx");
      ei.target.classList.add("show_svg");
      ei.target.classList.remove("hide_svg");
      ei.target.classList.add("active-inf-bx-shadow");
      ei.target.classList.remove("inactive-inf-bx-shadow");
      ei.target.classList.add("activate-inf-bx-anim");
      ei.target.classList.remove("deactivate-inf-bx-anim");
    } else {
      ei.target.classList.remove("activate-inf-bx");
      ei.target.classList.remove("show_svg");
      ei.target.classList.add("hide_svg");
      ei.target.classList.remove("active-inf-bx-shadow");
      ei.target.classList.add("inactive-inf-bx-shadow");
      ei.target.classList.remove("activate-inf-bx-anim");
      ei.target.classList.add("deactivate-inf-bx-anim");
    }
  })
});
inf.forEach(i => {inf_bx.observe(i)});

let _yscroll = 0;
document.addEventListener("scroll", (e) => {
  const yscroll = window.scrollY;
  if (yscroll <= _yscroll && yscroll !== 0) {
    document.querySelector(".main-header").classList.add("active-header");
    document.querySelector(".main-header").classList.remove("inactive-header");
  } else {
    document.querySelector(".main-header").classList.remove("active-header");
    document.querySelector(".main-header").classList.add("inactive-header");
  };

  if (yscroll + 100 <= 300){
    document.querySelector(".main-header").classList.remove("active-header");
    document.querySelector(".main-header").classList.remove("inactive-header");   
  } 
  
  _yscroll = yscroll;
});