import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
export class OverlayConditionsMetadata$Entry extends Record {
    static CODEC: Codec<OverlayConditionsMetadata$Entry>;
    constructor(directory: string, condition: ResourceCondition)
    // private condition: ResourceCondition;
    // private directory: string;
    condition(): ResourceCondition;
    directory(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}