import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Int2ByteOpenCustomHashMap$MapIterator<ConsumerType extends Object | number | string | boolean> extends Object {
    private constructor(null_: Int2ByteOpenCustomHashMap$MapIterator<ConsumerType>)
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