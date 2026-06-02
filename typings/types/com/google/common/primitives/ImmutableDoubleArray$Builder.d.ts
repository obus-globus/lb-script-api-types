import type { ImmutableDoubleArray } from '../../../../com/google/common/primitives/ImmutableDoubleArray.d.ts'
import type { DoubleStream } from '../../../../java/util/stream/DoubleStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableDoubleArray$Builder extends Object {
    constructor(initialCapacity: number)
    // private array: number[];
    // private count: number;
    add(value: number): ImmutableDoubleArray$Builder;
    addAll(values: ImmutableDoubleArray): ImmutableDoubleArray$Builder;
    addAll(stream: DoubleStream): ImmutableDoubleArray$Builder;
    addAll(values: number[]): ImmutableDoubleArray$Builder;
    addAll(values: E[]): ImmutableDoubleArray$Builder;
    addAll(values: number[]): ImmutableDoubleArray$Builder;
    build(): ImmutableDoubleArray;
    // private ensureRoomFor(numberToAdd: number): void;
}