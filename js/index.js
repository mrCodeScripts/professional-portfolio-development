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
console.log(m_i_svg_anim);
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