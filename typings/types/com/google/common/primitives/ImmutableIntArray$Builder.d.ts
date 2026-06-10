import type { ImmutableIntArray } from '../../../../com/google/common/primitives/ImmutableIntArray.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableIntArray$Builder extends Object {
    constructor(initialCapacity: number)
    // private array: number[];
    // private count: number;
    add(value: number): ImmutableIntArray$Builder;
    addAll(values: ImmutableIntArray): ImmutableIntArray$Builder;
    addAll(stream: IntStream): ImmutableIntArray$Builder;
    addAll(values: number[]): ImmutableIntArray$Builder;
    build(): ImmutableIntArray;
    // private ensureRoomFor(numberToAdd: number): void;
}