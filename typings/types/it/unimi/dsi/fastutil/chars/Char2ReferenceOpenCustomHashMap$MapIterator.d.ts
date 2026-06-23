import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Char2ReferenceOpenCustomHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    private constructor(null_: Char2ReferenceOpenCustomHashMap$MapIterator<Object>)
    // private c: number;
    // private last: number;
    // private mustReturnNullKey: boolean;
    // private pos: number;
    // private wrapped: (Object | null)[];
    acceptOnIndex(arg0: ConsumerType, arg1: number): void;
    forEachRemaining(arg0: ConsumerType): void;
    hasNext(): boolean;
    nextEntry(): number;
    remove(): void;
    // private shiftKeys(arg0: number): void;
    skip(arg0: number): number;
}