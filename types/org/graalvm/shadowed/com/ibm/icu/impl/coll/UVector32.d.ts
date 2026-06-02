import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class UVector32 extends Object {
    constructor()
    readonly buffer: number[];
    // private length: number;
    addElement(e: number): void;
    elementAti(i: number): number;
    // private ensureAppendCapacity(): void;
    getBuffer(): number[];
    insertElementAt(elem: number, index: number): void;
    isEmpty(): boolean;
    removeAllElements(): void;
    setElementAt(elem: number, index: number): void;
    size(): number;
}