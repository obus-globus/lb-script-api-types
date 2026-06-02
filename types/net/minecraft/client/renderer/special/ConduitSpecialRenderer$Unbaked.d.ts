import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConduitSpecialRenderer } from '../../../../../net/minecraft/client/renderer/special/ConduitSpecialRenderer.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
export class ConduitSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<ConduitSpecialRenderer$Unbaked>;
    constructor()
    bake(context: SpecialModelRenderer$BakingContext): ConduitSpecialRenderer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MapCodec<ConduitSpecialRenderer$Unbaked>;
}