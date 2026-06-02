import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DecoratedPotSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/DecoratedPotSpecialRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
import type { PotDecorations } from '../../../../../net/minecraft/world/level/block/entity/PotDecorations.d.ts'
export class DecoratedPotSpecialRenderer$Unbaked extends Record implements SpecialModelRenderer$Unbaked<PotDecorations> {
    static MAP_CODEC: MapCodec<DecoratedPotSpecialRenderer$Unbaked>;
    constructor()
    bake(context: SpecialModelRenderer$BakingContext): DecoratedPotSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MapCodec<DecoratedPotSpecialRenderer$Unbaked>;
}