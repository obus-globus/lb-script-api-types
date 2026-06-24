import type { TreeMultiset$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TreeMultiset$Reference<T extends unknown> extends Object {
    private constructor()
    constructor(arg0: TreeMultiset$1)
    // private value: T;
    checkAndSet(expected: T, newValue: T): void;
    clear(): void;
    get(): T;
}