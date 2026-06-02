import type { Interner } from '../../../../../com/google/common/collect/Interner.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelBaker$Interner } from '../../../../../net/minecraft/client/resources/model/ModelBaker$Interner.d.ts'
import type { BakedQuad$MaterialInfo } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad$MaterialInfo.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ModelBakery$InternerImpl extends Object implements ModelBaker$Interner {
    private constructor()
    // private materialInfos: Interner<BakedQuad$MaterialInfo>;
    // private vectors: Interner<Vector3fc>;
    materialInfo(material: BakedQuad$MaterialInfo): BakedQuad$MaterialInfo;
    vector(v: Vector3fc): Vector3fc;
}