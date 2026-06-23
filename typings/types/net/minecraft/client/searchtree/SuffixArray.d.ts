import type { Object } from '../../../../java/lang/Object.d.ts'
export class SuffixArray<T extends unknown> extends Object {
    constructor()
    // private chars: (Object | null)[];
    // private list: T[];
    // private maxStringLength: number;
    // private offsets: (Object | null)[];
    // private suffixToT: (Object | null)[];
    // private wordStarts: (Object | null)[];
    add(t: T, text: string): void;
    // private compare(text: string, index: number): number;
    generate(): void;
    // private getString(i: number): string;
    // private print(): void;
    search(text: string): T[];
}