import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../../com/mojang/serialization/DataResult.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { PackType } from '../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { PackFormat$IntermediaryFormatHolder } from '../../../../../../net/minecraft/server/packs/metadata/pack/PackFormat$IntermediaryFormatHolder.d.ts'
import type { InclusiveRange } from '../../../../../../net/minecraft/util/InclusiveRange.d.ts'
export class PackFormat extends Record implements Comparable<PackFormat> {
    static BOTTOM_CODEC: Codec<PackFormat>;
    static TOP_CODEC: Codec<PackFormat>;
    static lastPreMinorVersion(paramtype: PackType): number;
    static of(parammajor: number): PackFormat;
    static of(parammajor: number, paramminor: number): PackFormat;
    static packCodec(paramtype: PackType): MapCodec<InclusiveRange<PackFormat>>;
    static validateHolderList(paramlist: (PackFormat$IntermediaryFormatHolder | null)[], paramlastPreMinorVersion: number, paramconstructor: (param0: PackFormat$IntermediaryFormatHolder | null, param1: InclusiveRange<PackFormat>) => Object | null): DataResult<(Object | null)[]>;
    // private major: number;
    // private minor: number;
    compareTo(other: PackFormat): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    major(): number;
    minor(): number;
    minorRange(): InclusiveRange<PackFormat>;
    toString(): string;
}