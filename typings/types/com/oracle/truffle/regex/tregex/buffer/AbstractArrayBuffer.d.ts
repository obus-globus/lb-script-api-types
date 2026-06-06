import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractArrayBuffer extends Object {
    constructor()
    length: number;
    clear(): void;
    ensureCapacity(newLength: number): void;
    getBufferLength(): number;
    grow(newLength: number): void;
    isEmpty(): boolean;
    setLength(size: number): void;
}