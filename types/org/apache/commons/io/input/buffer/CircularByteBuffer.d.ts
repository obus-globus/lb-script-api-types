import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CircularByteBuffer extends Object {
    constructor()
    constructor(arg0: number)
    // private buffer: number[];
    readonly currentNumberOfBytes: number;
    // private endOffset: number;
    // private startOffset: number;
    add(arg0: number): void;
    add(arg0: number[], arg1: number, arg2: number): void;
    clear(): void;
    getCurrentNumberOfBytes(): number;
    getSpace(): number;
    hasBytes(): boolean;
    hasSpace(): boolean;
    hasSpace(arg0: number): boolean;
    peek(arg0: number[], arg1: number, arg2: number): boolean;
    read(): number;
    read(arg0: number[], arg1: number, arg2: number): void;
}