import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TropicalFish$Pattern } from '../../../../../../net/minecraft/world/entity/animal/fish/TropicalFish$Pattern.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
export class TropicalFish$Variant extends Record {
    static CODEC: Codec<TropicalFish$Variant>;
    constructor(packedId: number)
    constructor(pattern: TropicalFish$Pattern, baseColor: DyeColor, patternColor: DyeColor)
    // private baseColor: DyeColor;
    // private pattern: TropicalFish$Pattern;
    // private patternColor: DyeColor;
    baseColor(): DyeColor;
    equals(o: Object | null): boolean;
    getPackedId(): number;
    hashCode(): number;
    pattern(): TropicalFish$Pattern;
    patternColor(): DyeColor;
    toString(): string;
}