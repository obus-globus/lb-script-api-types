import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class UnicodeMapIterator<T extends unknown> extends Object {
    static IS_STRING: number;
    constructor()
    constructor(arg0: string[])
    codepoint: number;
    codepointEnd: number;
    // private endElement: number;
    // private endRange: number;
    // private map: string[];
    // private nextElement: number;
    // private range: number;
    string: string;
    // private stringIterator: Iterator<string>;
    value: T;
    getString(): string;
    loadRange(arg0: number): T;
    next(): boolean;
    nextRange(): boolean;
    reset(): UnicodeMapIterator<T>;
    reset(arg0: string[]): void;
}