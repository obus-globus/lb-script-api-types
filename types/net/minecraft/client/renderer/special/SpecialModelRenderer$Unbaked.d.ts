import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { SpecialModelRenderer$BakingContext } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$BakingContext.d.ts'
export interface SpecialModelRenderer$Unbaked<T extends Object | number | string | boolean> extends Object{
    bake(context: SpecialModelRenderer$BakingContext): SpecialModelRenderer<T>;
    type(): MapCodec<SpecialModelRenderer$Unbaked<T>>;
}