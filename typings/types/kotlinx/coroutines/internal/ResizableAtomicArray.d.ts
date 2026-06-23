import type { AtomicReferenceArray } from '../../../java/util/concurrent/atomic/AtomicReferenceArray.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ResizableAtomicArray<T extends unknown> extends Object {
    constructor(initialLength: number)
    // private array: AtomicReferenceArray<T>;
    currentLength(): number;
    get(index: number): T | null;
    setSynchronized(index: number, value: T | null): void;
}