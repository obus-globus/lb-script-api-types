import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Reference2ReferenceOpenHashMap$MapIterator<ConsumerType extends unknown> extends Object {
    constructor(null_: Map<Object, Object>, arg1: (Object | null)[])
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