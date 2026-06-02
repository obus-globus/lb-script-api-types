import type { Quadrant } from '../../../../../../com/mojang/math/Quadrant.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelState } from '../../../../../../net/minecraft/client/renderer/block/dispatch/ModelState.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelBaker$Interner } from '../../../../../../net/minecraft/client/resources/model/ModelBaker$Interner.d.ts'
import type { CuboidFace } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidFace.d.ts'
import type { CuboidFace$UVs } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidFace$UVs.d.ts'
import type { CuboidRotation } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidRotation.d.ts'
import type { BakedQuad } from '../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { BakedQuad$MaterialInfo } from '../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad$MaterialInfo.d.ts'
import type { Material$Baked } from '../../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vector3fc } from '../../../../../../org/joml/Vector3fc.d.ts'
export class FaceBakery extends Object {
    static bakeQuad(paraminterner: ModelBaker$Interner, paramfrom: Vector3fc, paramto: Vector3fc, paramuvs: CuboidFace$UVs, paramuvRotation: Quadrant, parammaterialInfo: BakedQuad$MaterialInfo, paramfacing: Direction, parammodelState: ModelState, paramelementRotation: CuboidRotation): BakedQuad;
    static bakeQuad(parammodelBaker: ModelBaker, paramfrom: Vector3fc, paramto: Vector3fc, paramface: CuboidFace, parammaterial: Material$Baked, paramfacing: Direction, parammodelState: ModelState, paramelementRotation: CuboidRotation, paramshade: boolean, paramlightEmission: number): BakedQuad;
    constructor()
}