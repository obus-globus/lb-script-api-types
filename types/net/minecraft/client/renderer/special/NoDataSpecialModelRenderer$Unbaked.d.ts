import type { MapCodec } from '../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpecialModelRenderer$Unbaked } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer$Unbaked.d.ts'
export interface NoDataSpecialModelRenderer$Unbaked extends Object, SpecialModelRenderer$Unbaked<void>{
    type(): MapCodec<NoDataSpecialModelRenderer$Unbaked>;
}