import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class StringTokenIterator extends Object {
    constructor(text: string, dlms: string)
    // private _dlms: string;
    // private _done: boolean;
    // private _end: number;
    // private _start: number;
    // private _text: string;
    // private _token: string;
    current(): string;
    currentEnd(): number;
    currentStart(): number;
    first(): string;
    hasNext(): boolean;
    isDone(): boolean;
    next(): string;
    // private nextDelimiter(start: number): number;
    setStart(offset: number): StringTokenIterator;
    setText(text: string): StringTokenIterator;
}