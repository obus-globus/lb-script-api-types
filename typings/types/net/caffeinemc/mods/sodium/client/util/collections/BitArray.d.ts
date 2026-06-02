import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BitArray extends Object {
    constructor(arg0: number)
    // private capacity: number;
    // private words: number[];
    capacity(): number;
    countSetBits(): number;
    fill(arg0: boolean): void;
    get(arg0: number): boolean;
    getAndSet(arg0: number): boolean;
    getAndUnset(arg0: number): boolean;
    nextSetBit(arg0: number): number;
    put(arg0: number, arg1: boolean): void;
    set(arg0: number): void;
    set(arg0: number, arg1: number): void;
    setAll(): void;
    unset(arg0: number): void;
    unset(arg0: number, arg1: number): void;
    unsetAll(): void;
}