import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EndCubeSpecialRenderer$Type } from '../../../../../net/minecraft/client/renderer/special/EndCubeSpecialRenderer$Type.d.ts'
import type { NoDataSpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/NoDataSpecialModelRenderer$Unbaked.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
export class EndCubeSpecialRenderer$Unbaked extends Record implements NoDataSpecialModelRenderer$Unbaked {
    static MAP_CODEC: MapCodec<EndCubeSpecialRenderer$Unbaked>;
    constructor(effect: EndCubeSpecialRenderer$Type)
    // private effect: EndCubeSpecialRenderer$Type;
    bake(context: SpecialModelRenderer$BakingContext): SpecialModelRenderer<void>;
    effect(): EndCubeSpecialRenderer$Type;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): MapCodec<EndCubeSpecialRenderer$Unbaked>;
}