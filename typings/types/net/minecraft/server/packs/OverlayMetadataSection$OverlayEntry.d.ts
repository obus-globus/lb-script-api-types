import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PackFormat } from '../../../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { InclusiveRange } from '../../../../net/minecraft/util/InclusiveRange.d.ts'
export class OverlayMetadataSection$OverlayEntry extends Record {
    constructor(format: InclusiveRange<PackFormat>, overlay: string)
    // private format: InclusiveRange<PackFormat>;
    // private overlay: string;
    equals(o: Object | null): boolean;
    format(): InclusiveRange<PackFormat>;
    hashCode(): number;
    isApplicable(formatToTest: PackFormat): boolean;
    overlay(): string;
    toString(): string;
}