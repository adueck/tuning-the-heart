export function groupCouplets(proverbs: Couplet[]): CoupletGroup[] {
  return proverbs.reduce((grouped, proverb) => {
    const groupIndex = grouped.findIndex((p) => p.theme === proverb.theme);
    if (groupIndex === -1) {
      return [...grouped, { theme: proverb.theme, proverbs: [proverb] }];
    }
    const newG = [...grouped];
    newG[groupIndex] = {
      ...newG[groupIndex],
      proverbs: [...newG[groupIndex].proverbs, proverb],
    };
    return newG;
  }, [] as CoupletGroup[]);
}
