// 关键字加高亮标识
export const lightShowHtml = (text: string, words: string, color: string): string => {
    if (!text) {
        return '';
    }
    const colr = color || '#007AFF';
    const patrn = /([\.\*\[\]\\\(\)\$\^\?\|\+])/ig;
    if (patrn.test(words)) { // 如果包含特殊字符用数组方法
        text = text.split(words).join(`<b style="color: ${colr};">${words}</b>`);
    } else {
        words = words.replace(/&/g, '&')
            .replace(/</g, '<')
            .replace(/>/g, '>');
        const re = new RegExp(words, 'ig');
        text = text.replace(re, `<b style="color: ${colr};">${words}</b>`);
    }
    return text;
};