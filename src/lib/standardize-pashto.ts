export function standardizePashto(input: string): string {
    // Replace Arabic ى with Farsi ی
    return input.replace(/\u0649/g, "\u06cc")
      // Replace Urdu ہ and ھ with ه
      .replace(/ھ|ہ/g, "ه")
      // Replace Arabic ك with ک
      .replace(/\u0643/g, "\u06a9")
      // Replace Farsi گ with ګ
      .replace(/گ/g, "ګ")
      // Replace ي in the middle of words with ی
      .replace(/ي(?=[\u0621-\u065f\u0670-\u06d3\u06d5])/g, "ی")
      // Replace آ two character version with combined آ character
      .replace(/آ/g, "آ");
}