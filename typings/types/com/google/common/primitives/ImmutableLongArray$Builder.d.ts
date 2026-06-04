import type { ImmutableLongArray } from '../../../../com/google/common/primitives/ImmutableLongArray.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableLongArray$Builder extends Object {
    constructor(initialCapacity: number)
    // private array: number[];
    // private count: number;
    add(value: number): ImmutableLongArray$Builder;
    addAll(values: ImmutableLongArray): ImmutableLongArray$Builder;
    addAll(stream: LongStream): ImmutableLongArray$Builder;
    addAll(values: number[]): ImmutableLongArray$Builder;
    addAll(values: E[]): ImmutableLongArray$Builder;
    build(): ImmutableLongArray;
    // private ensureRoomFor(numberToAdd: number): void;
}