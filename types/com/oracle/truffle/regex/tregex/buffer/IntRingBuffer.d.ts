import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IntRingBuffer extends Object {
    constructor(sizePowerOf2: number)
    // private buf: number[];
    // private length: number;
    // private start: number;
    add(i: number): void;
    addAll(o: number[]): void;
    clear(): void;
    first(): number;
    // private index(index: number): number;
    isEmpty(): boolean;
    last(): number;
    removeFirst(): number;
}