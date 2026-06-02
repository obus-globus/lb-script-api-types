import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CircularBuffer extends Object {
    constructor(arg0: number)
    // private buffer: number[];
    // private readIndex: number;
    // private size: number;
    // private writeIndex: number;
    available(): boolean;
    copy(arg0: number, arg1: number): void;
    get(): number;
    put(arg0: number): void;
}