import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Object2CharOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    private constructor(null_: Object2CharOpenHashMap$MapIterator<Object>)
    // private c: number;
    // private last: number;
    // private mustReturnNullKey: boolean;
    // private pos: number;
    // private wrapped: K[];
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    forEachRemaining(arg0: ConsumerType): void;
    hasNext(): boolean;
    nextEntry(): number;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}