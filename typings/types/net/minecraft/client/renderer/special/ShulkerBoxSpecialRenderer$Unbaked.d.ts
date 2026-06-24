import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { ShulkerBoxSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/ShulkerBoxSpecialRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { DyeColor } from '../../../../../net/minecraft/world/item/DyeColor.d.ts'
export class ShulkerBoxSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<ShulkerBoxSpecialRenderer$Unbaked>;
    constructor()
    constructor(texture: Identifier, openness: number)
    constructor(color: DyeColor)
    // private openness: number;
    // private texture: Identifier;
    bake(context: SpecialModelRenderer$BakingContext): ShulkerBoxSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    openness(): number;
    texture(): Identifier;
    toString(): string;
    type(): MapCodec<ShulkerBoxSpecialRenderer$Unbaked>;
}