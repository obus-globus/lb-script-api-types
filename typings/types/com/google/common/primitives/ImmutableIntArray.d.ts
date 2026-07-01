import type { ImmutableIntArray$Builder } from '../../../../com/google/common/primitives/ImmutableIntArray$Builder.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator$OfInt } from '../../../../java/util/Spliterator$OfInt.d.ts'
import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableIntArray extends Object implements Serializable {
    static builder(): ImmutableIntArray$Builder;
    static builder(paraminitialCapacity: number): ImmutableIntArray$Builder;
    static copyOf(paramvalues: number[]): ImmutableIntArray;
    static copyOf(paramvalues: number[]): ImmutableIntArray;
    static copyOf(paramvalues: number[]): ImmutableIntArray;
    static copyOf(paramstream: IntStream): ImmutableIntArray;
    static of(): ImmutableIntArray;
    static of(parame0: number): ImmutableIntArray;
    static of(parame0: number, parame1: number): ImmutableIntArray;
    static of(parame0: number, parame1: number, parame2: number): ImmutableIntArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number): ImmutableIntArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number, parame4: number): ImmutableIntArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number, parame4: number, parame5: number): ImmutableIntArray;
    static of(paramfirst: number, paramrest: number[]): ImmutableIntArray;
    constructor(arg0: number[], arg1: number, arg2: number, arg3: any)
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
    spliterator(): Spliterator$OfInt;
    stream(): IntStream;
    subArray(startIndex: number, endIndex: number): ImmutableIntArray;
    toArray(): number[];
    toString(): string;
    trimmed(): ImmutableIntArray;
    writeReplace(): Object;
}