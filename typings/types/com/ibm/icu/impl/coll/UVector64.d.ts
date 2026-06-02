import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UVector64 extends Object {
    constructor()
    readonly buffer: number[];
    // private length: number;
    addElement(arg0: number): void;
    elementAti(arg0: number): number;
    // private ensureAppendCapacity(): void;
    getBuffer(): number[];
    insertElementAt(arg0: number, arg1: number): void;
    isEmpty(): boolean;
    removeAllElements(): void;
    setElementAt(arg0: number, arg1: number): void;
    size(): number;
}