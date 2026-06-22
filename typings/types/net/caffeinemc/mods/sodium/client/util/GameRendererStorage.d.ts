import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FogParameters } from '../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { FogStorage } from '../../../../../../net/caffeinemc/mods/sodium/client/util/FogStorage.d.ts'
import type { Matrix4fc } from '../../../../../../org/joml/Matrix4fc.d.ts'
export interface GameRendererStorage extends Object, FogStorage{
    sodium$getFogParameters(): FogParameters;
    sodium$getProjectionMatrix(): Matrix4fc;
}