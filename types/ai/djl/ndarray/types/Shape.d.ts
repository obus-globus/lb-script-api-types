import type { LayoutType } from '../../../../ai/djl/ndarray/types/LayoutType.d.ts'
import type { Pair } from '../../../../ai/djl/util/Pair.d.ts'
import type { DataInputStream } from '../../../../java/io/DataInputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Shape extends Object {
    static decode(paramarg0: DataInputStream): Shape;
    static decode(paramarg0: ByteBuffer): Shape;
    static parseShapes(paramarg0: string): Pair<K, V>[];
    static update(paramarg0: Shape, paramarg1: number, paramarg2: number): Shape;
    constructor(arg0: Pair<K, V>[])
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: LayoutType[])
    constructor(arg0: number[], arg1: string)
    constructor(arg0: number[])
    readonly layout: LayoutType[];
    readonly shape: number[];
    add(arg0: number[]): Shape;
    addAll(arg0: Shape): Shape;
    dimension(): number;
    equals(arg0: Object | null): boolean;
    filterByLayoutType(arg0: (param0: LayoutType) => kotlin.Boolean): Shape;
    get(arg0: number): number;
    getEncoded(): number[];
    getLastDimension(): number;
    getLayout(): LayoutType[];
    getLayoutType(arg0: number): LayoutType;
    getLeadingOnes(): number;
    getShape(): number[];
    getTrailingOnes(): number;
    getUnknownValueCount(): number;
    hasZeroDimension(): boolean;
    hashCode(): number;
    head(): number;
    isLayoutKnown(): boolean;
    isRankOne(): boolean;
    isScalar(): boolean;
    map(arg0: (param0: Pair<number, LayoutType>) => Pair<number, LayoutType>): Shape;
    size(): number;
    size(arg0: number[]): number;
    slice(arg0: number): Shape;
    slice(arg0: number, arg1: number): Shape;
    stream(): Stream<Pair<number, LayoutType>>;
    tail(): number;
    toLayoutString(): string;
    toString(): string;
}