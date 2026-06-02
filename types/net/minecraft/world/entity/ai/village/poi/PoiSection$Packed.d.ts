import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PoiRecord$Packed } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiRecord$Packed.d.ts'
import type { PoiSection } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiSection.d.ts'
export class PoiSection$Packed extends Record {
    static CODEC: Codec<PoiSection$Packed>;
    // private isValid: boolean;
    // private records: PoiRecord$Packed[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    isValid(): boolean;
    records(): PoiRecord$Packed[];
    toString(): string;
    unpack(setDirty: () => void): PoiSection;
}