export default function bs_list(haystack: number[], needle: number): boolean {
    let l = 0;
    let r = haystack.length - 1;

    while (l <= r) {
        const m = Math.floor((r + l) / 2);

        if (haystack[m] === needle) {
            return true;
        }

        if (haystack[m] < needle) {
            l = m + 1;
        }

        if (haystack[m] > needle) {
            r = m - 1;
        }
    }

    return false;
}
