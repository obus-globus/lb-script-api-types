import type { ImmutableDoubleArray$Builder } from '../../../../com/google/common/primitives/ImmutableDoubleArray$Builder.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator$OfDouble } from '../../../../java/util/Spliterator$OfDouble.d.ts'
import type { DoubleConsumer } from '../../../../java/util/function/DoubleConsumer.d.ts'
import type { DoubleStream } from '../../../../java/util/stream/DoubleStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableDoubleArray extends Object implements Serializable {
    static builder(): ImmutableDoubleArray$Builder;
    static builder(paraminitialCapacity: number): ImmutableDoubleArray$Builder;
    static copyOf(paramvalues: number[]): ImmutableDoubleArray;
    static copyOf(paramvalues: number[]): ImmutableDoubleArray;
    static copyOf(paramvalues: number[]): ImmutableDoubleArray;
    static copyOf(paramstream: DoubleStream): ImmutableDoubleArray;
    static of(): ImmutableDoubleArray;
    static of(parame0: number): ImmutableDoubleArray;
    static of(parame0: number, parame1: number): ImmutableDoubleArray;
    static of(parame0: number, parame1: number, parame2: number): ImmutableDoubleArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number): ImmutableDoubleArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number, parame4: number): ImmutableDoubleArray;
    static of(parame0: number, parame1: number, parame2: number, parame3: number, parame4: number, parame5: number): ImmutableDoubleArray;
    static of(paramfirst: number, ...paramrest: number[]): ImmutableDoubleArray;
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
    spliterator(): Spliterator$OfDouble;
    stream(): DoubleStream;
    subArray(startIndex: number, endIndex: number): ImmutableDoubleArray;
    toArray(): number[];
    toString(): string;
    trimmed(): ImmutableDoubleArray;
    writeReplace(): Object;
}