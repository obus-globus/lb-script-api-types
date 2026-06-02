import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PlayerSkinRenderCache$RenderInfo } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache$RenderInfo.d.ts'
import type { PlayerHeadSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/PlayerHeadSpecialRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
export class PlayerHeadSpecialRenderer$Unbaked extends Record implements SpecialModelRenderer$Unbaked<PlayerSkinRenderCache$RenderInfo> {
    static MAP_CODEC: MapCodec<PlayerHeadSpecialRenderer$Unbaked>;
    constructor()
    bake(context: SpecialModelRenderer$BakingContext): PlayerHeadSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MapCodec<PlayerHeadSpecialRenderer$Unbaked>;
}