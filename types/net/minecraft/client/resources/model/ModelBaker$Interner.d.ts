import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BakedQuad$MaterialInfo } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad$MaterialInfo.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export interface ModelBaker$Interner extends Object{
    materialInfo(material: BakedQuad$MaterialInfo): BakedQuad$MaterialInfo;
    vector(vector: Vector3fc): Vector3fc;
}