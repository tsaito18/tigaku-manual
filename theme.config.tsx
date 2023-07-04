import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: "600", fontSize: "1.2rem" }}>
      地学部マニュアル
    </span>
  ),
  search: {
    placeholder: "マニュアルを検索...",
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: null,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "ライト",
        dark: "ダーク",
        system: "自動",
      };
    },
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - 地学部マニュアル",
    };
  },
};

export default config;
