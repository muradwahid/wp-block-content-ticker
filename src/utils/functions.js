export const getCssBox = (value) => { 
  return `${value?.top} ${value?.left} ${value?.bottom} ${value?.right}`
}

export const getBorderRadiusCSS = (value) => { 
  const { top, right, bottom, left } = value
  return `${top ? "border-top-left-radius:" + top + ";" : ""}
  ${right ? "border-top-right-radius:" + right + ";" : ""}
  ${bottom ? "border-bottom-right-radius:" + bottom + ";" : ""}
  ${left ? "border-bottom-left-radius:" + left + ";" : ""}
  `.replace(/\s+/g, " ").trim();
}