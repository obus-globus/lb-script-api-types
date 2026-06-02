import type { Object } from '../../../../java/lang/Object.d.ts'
export class InputSource extends Object {
    constructor(arg0: string)
    // private buffer: string;
    // private cursor: number;
    // private lastReadCount: number;
    // private lastReadCursor: number;
    atEnd(): boolean;
    backup(arg0: number): void;
    getPosition(): number;
    gotoPosition(arg0: number): void;
    peekChar(): number;
    readCodePoint(): number;
    skip(arg0: number): void;
}