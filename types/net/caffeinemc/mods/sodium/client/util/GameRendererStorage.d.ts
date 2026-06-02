import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FogStorage } from '../../../../../../net/caffeinemc/mods/sodium/client/util/FogStorage.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export interface GameRendererStorage extends Object, FogStorage{
    sodium$getProjectionMatrix(): Matrix4fc;
}