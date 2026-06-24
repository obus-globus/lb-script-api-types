import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UnihexProvider$Dimensions } from '../../../../../../net/minecraft/client/gui/font/providers/UnihexProvider$Dimensions.d.ts'
export class UnihexProvider$OverrideRange extends Record {
    static CODEC: Codec<UnihexProvider$OverrideRange>;
    private constructor(from: number, to: number, dimensions: UnihexProvider$Dimensions)
    // private dimensions: UnihexProvider$Dimensions;
    // private from: number;
    // private to: number;
    dimensions(): UnihexProvider$Dimensions;
    equals(o: Object | null): boolean;
    from(): number;
    hashCode(): number;
    to(): number;
    toString(): string;
}