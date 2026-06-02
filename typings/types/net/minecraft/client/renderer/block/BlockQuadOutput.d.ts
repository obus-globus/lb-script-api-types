import type { QuadInstance } from '../../../../../com/mojang/blaze3d/vertex/QuadInstance.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
export interface BlockQuadOutput extends Object{
    put(x: number, y: number, z: number, quad: BakedQuad, instance: QuadInstance): void;
}