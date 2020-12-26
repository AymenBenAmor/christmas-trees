const HtmlAttributes = {
  lang: "en"
}

exports.onRenderBody = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes(HtmlAttributes)
}
