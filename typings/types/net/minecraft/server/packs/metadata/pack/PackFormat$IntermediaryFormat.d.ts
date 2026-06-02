import type { DataResult } from '../../../../../../com/mojang/serialization/DataResult.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PackFormat } from '../../../../../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { InclusiveRange } from '../../../../../../net/minecraft/util/InclusiveRange.d.ts'
export class PackFormat$IntermediaryFormat extends Record {
    static OVERLAY_CODEC: MapCodec<PackFormat$IntermediaryFormat>;
    static fromRange(paramrange: InclusiveRange<PackFormat>, paramlastPreMinorVersion: number): PackFormat$IntermediaryFormat;
    constructor(min: Optional<PackFormat>, max: Optional<PackFormat>, format: Optional<number>, supported: Optional<InclusiveRange<number>>)
    // private format: Optional<number>;
    // private max: Optional<PackFormat>;
    // private min: Optional<PackFormat>;
    // private supported: Optional<InclusiveRange<number>>;
    effectiveMinMajorVersion(): number;
    equals(o: Object | null): boolean;
    format(): Optional<number>;
    hashCode(): number;
    max(): Optional<PackFormat>;
    min(): Optional<PackFormat>;
    supported(): Optional<InclusiveRange<number>>;
    toString(): string;
    validate(lastPreMinorVersion: number, hasPackFormatField: boolean, requireOldField: boolean, context: string, oldFieldName: string): DataResult<InclusiveRange<PackFormat>>;
    // private validateNewFormat(lastPreMinorVersion: number, hasPackFormatField: boolean, requireOldField: boolean, context: string, oldFieldName: string): DataResult<InclusiveRange<PackFormat>>;
    // private validateOldFormat(lastPreMinorVersion: number, hasPackFormatField: boolean, context: string, oldFieldName: string): DataResult<InclusiveRange<PackFormat>>;
    // private validatePackFormatForRange(min: number, max: number): string;
}