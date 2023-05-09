/*
 * @Descripttion:
 * @version:
 * @Author: WangPeng
 * @Date: 2023-03-20 17:29:22
 * @LastEditors: WangPeng
 * @LastEditTime: 2023-05-09 10:25:05
 */
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import {
  addNavItemStyle,
  bindHandleScroll,
  removeNavItemStyle,
  removeScroll,
} from "@utils/elementUtils";
import aboutImg from "@/public/about_3.jpg";
import style from "./about.module.css";

const About = () => {
  useEffect(() => {
    addNavItemStyle();
    bindHandleScroll();

    return () => {
      removeNavItemStyle();
      removeScroll();
    };
  }, []);
  return (
    <div className={style.about}>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
      </Head>
      <div className={style.about_content}>
        <div className={style.title}>About</div>
        <Image
          className={style.about_img}
          width={850}
          alt="about"
          src={aboutImg}
          priority
        />
        <div className={style.title}>Me</div>
        <div className={style.info}>
          Hi！我是Shimmer🌈，在北京工作，目前从事Web前端工程师。
          <Link
            className={style.toResume}
            href={"https://wp-boke.work/resume"}
            target="_block"
          >
            （了解更多请点击这里）
          </Link>
        </div>
        <div className={style.title}>关于Blog</div>
        <div className={style.desc}>
          我的个人博客已经经历了三个不同版本的演进，从最初的纯HTML，到React，再到现在的NextJS。写博客的初衷是为了拓展自己的视野、记录自己的成长和生活，同时也希望通过自己的文章为读者们提供有价值的信息和知识。目前，我已经建立了对应的后台管理系统，使得写作变得更加方便和高效。未来，我会持续探索和尝试新的技术和方法，让我的博客能够走得更远，为读者们带来更多有趣的内容和更好的阅读体验。
        </div>
        <div className={style.title}>Contact</div>
        <div className={style.contact}>
          <div className={style.contact_item}>
            <div className={style.contact_item_key}>Email:</div>
            <div className={style.contact_item_value}>webwp0403@163.com</div>
          </div>
          <div className={style.contact_item}>
            <div className={style.contact_item_key}>微信:</div>
            <div className={style.contact_item_value}>wp0403-</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
