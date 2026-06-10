import type { ImmutableLongArray$Builder } from '../../../../com/google/common/primitives/ImmutableLongArray$Builder.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator$OfLong } from '../../../../java/util/Spliterator$OfLong.d.ts'
import type { LongConsumer } from '../../../../java/util/function/LongConsumer.d.ts'
import type { LongStream } from '../../../../java/util/stream/LongStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableLongArray extends Object implements Serializable {
    static builder(): ImmutableLongArray$Builder;
    static builder(paraminitialCapacity: number): ImmutableLongArray$Builder;
    static copyOf(paramvalues: number[]): ImmutableLongArray;
    static copyOf(paramvalues: number[]): ImmutableLongArray;
    static copyOf(paramstream: LongStream): ImmutableLongArray;
    static copyOf(paramvalues: number[]): ImmutableLongArray;
    static of(): ImmutableLongArray;
    static of(parame0: number): ImmutableLongArray;
    static of(parame0: number, parame1: number): ImmutableLongArray;
    static of(parame0: number, parame1: number, parame2: number): ImmutableLongArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number): ImmutableLongArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number, parame4: number): ImmutableLongArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number, parame4: number, parame5: number): ImmutableLongArray;
    static of(paramfirst: number, paramrest: number[]): ImmutableLongArray;
    private constructor(array: number[])
    private constructor(array: number[], start: number, end: number)
    // private array: number[];
    // private end: number;
    // private start: number;
    asList(): number[];
    contains(target: number): boolean;
    equals(object: Object | null): boolean;
    forEach(consumer: (param0: number) => void): void;
    get(index: number): number;
    hashCode(): number;
    indexOf(target: number): number;
    isEmpty(): boolean;
    // private isPartialView(): boolean;
    lastIndexOf(target: number): number;
    length(): number;
    readResolve(): Object;
    spliterator(): Spliterator$OfLong;
    stream(): LongStream;
    subArray(startIndex: number, endIndex: number): ImmutableLongArray;
    toArray(): number[];
    toString(): string;
    trimmed(): ImmutableLongArray;
    writeReplace(): Object;
}