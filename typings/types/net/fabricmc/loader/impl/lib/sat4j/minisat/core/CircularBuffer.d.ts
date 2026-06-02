import type { Serializable } from '../../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class CircularBuffer extends Object implements Serializable {
    constructor(arg0: number)
    readonly full: boolean;
    // private index: number;
    // private sum: number;
    // private values: number[];
    average(): number;
    clear(): void;
    isFull(): boolean;
    push(arg0: number): void;
}