import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/BedSpecialRenderer.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { BedPart } from '../../../../../net/minecraft/world/level/block/state/properties/BedPart.d.ts'
export class BedSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<BedSpecialRenderer$Unbaked>;
    constructor(texture: Identifier, part: BedPart)
    constructor(dyeColor: DyeColor, part: BedPart)
    // private part: BedPart;
    // private texture: Identifier;
    bake(context: SpecialModelRenderer$BakingContext): BedSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    part(): BedPart;
    texture(): Identifier;
    toString(): string;
    type(): MapCodec<BedSpecialRenderer$Unbaked>;
}