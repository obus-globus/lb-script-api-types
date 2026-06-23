import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class UnicodeMapIterator<T extends unknown> extends Object {
    static IS_STRING: number;
    constructor()
    constructor(set: string[])
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
    loadRange(range: number): T;
    next(): boolean;
    nextRange(): boolean;
    reset(): UnicodeMapIterator<T>;
    reset(set: string[]): void;
}