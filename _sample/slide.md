---
marp: true
theme: custom
paginate: true
---

<!-- _class: lead -->
<!-- _paginate: false -->

# Twilight Blossom

Style Guide Sample

---

# 通常スライド

## 見出し h2

### 見出し h3

本文テキスト。Shippori Mincho B1 と Cormorant Garamond の組み合わせ。
**太字**も使える。[リンクはディープピンク](https://example.com)。

---

# カラーパレット

::::c
:::_ {.panel}
**Background** `#fffffe`
白
:::

:::_ {.panel-accent}
**Highlight** `#ff8e3c`
オレンジのアクセント
:::

:::_ {.panel-highlight}
**Tertiary** `#d9376e`
ディープピンク
:::
::::

---

# テーブル

| 項目 | 説明 | 備考 |
|------|------|------|
| Background | スライド背景に使用 | `#fffffe` |
| Highlight | オレンジアクセント | `#ff8e3c` |
| Tertiary | ディープピンク | `#d9376e` |

---

# 2カラムレイアウト

::::c
:::_
**左カラム**

通常の2カラム。`:::c` で囲むだけ。
左右均等に分割される。
:::

:::_
**右カラム**

箇条書きも使える:
- 項目1
- 項目2
- 項目3
:::
::::

---

# 7:3 レイアウト

::::c-7-3
:::_
**メインエリア（7割）**

メインコンテンツを広く取りたいときに使う。
テキストが多い場合や、図解の横に補足を添えたい場合に便利。
:::

:::_ {.panel-accent}
**補足（3割）**
サイドの情報
:::
::::

---

# 3カラムレイアウト

::::c3
:::_ {.panel}
**Step 1**

準備段階
:::

:::_ {.panel}
**Step 2**

実行段階
:::

:::_ {.panel}
**Step 3**

完了
:::
::::

---

# グリッド（2×2）

::::grid-2x2
:::_ {.panel}
**左上**
情報A
:::

:::_ {.panel-accent}
**右上**
情報B
:::

:::_ {.panel-highlight}
**左下**
情報C
:::

:::_ {.panel}
**右下**
情報D
:::
::::

---

# インラインスタイル

通常のテキストの中で==ここだけハイライト=={.bg-highlight}できる。

==パープルのテキスト=={.tertiary}も使える。

==250,000=={.text-xl4 .navy}人

小さい補足 {.text-xs .gray}

---

# アラートコンポーネント

:::_ {.note}
補足情報をここに書く
:::

:::_ {.tip}
便利なヒント
:::

:::_ {.warning}
注意が必要な事項
:::

---

# Blockquote

> 引用テキスト。パープルのボーダーと薄紫の背景で表示される。
> 複数行にも対応。

---

# コードブロック

```javascript {name=example.js}
const theme = {
  background: '#fffffe',
  text: '#0d0d0d',
  highlight: '#ff8e3c',
  tertiary: '#d9376e',
};
```

---

<!-- _class: section -->
<!-- _paginate: false -->

# セクション区切り

---

# パネルバリエーション

::::c
:::_ {.panel-warn}
**Warning**
黄色系の警告パネル
:::

:::_ {.panel-danger}
**Danger**
赤系の危険パネル
:::
::::

---

# フォントサイズ

::::c
:::_
超特大 {.text-xl4}

大きめ {.text-xl2}

標準サイズ

小さめ {.text-sm}

極小テキスト {.text-xs2}
:::

:::_

| クラス | サイズ |
|--------|-------|
| `.text-xl5` | 3em |
| `.text-xl4` | 2.25em |
| `.text-xl2` | 1.5em |
| （デフォルト） | 28px |
| `.text-sm` | 0.875em |

:::
::::

---

<!-- _class: lead -->
<!-- _paginate: false -->

# End of Sample

Twilight Blossom Theme
