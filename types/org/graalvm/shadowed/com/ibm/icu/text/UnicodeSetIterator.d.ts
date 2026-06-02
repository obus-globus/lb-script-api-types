import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export class UnicodeSetIterator extends Object {
    static IS_STRING: number;
    constructor()
    constructor(set: string[])
    codepoint: number;
    codepointEnd: number;
    // private endElement: number;
    // private endRange: number;
    // private nextElement: number;
    // private range: number;
    // private set: string[];
    string: string;
    // private stringIterator: Iterator<string>;
    getString(): string;
    // private loadRange(aRange: number): void;
    next(): boolean;
    nextRange(): boolean;
    reset(): void;
    reset(uset: string[]): void;
    skipToStrings(): UnicodeSetIterator;
}