import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class InputSource extends Object {
    constructor(input: string)
    // private buffer: string;
    // private cursor: number;
    // private lastReadCount: number;
    // private lastReadCursor: number;
    atEnd(): boolean;
    backup(amount: number): void;
    getPosition(): number;
    gotoPosition(position: number): void;
    peekChar(): number;
    readCodePoint(): number;
    skip(amount: number): void;
}