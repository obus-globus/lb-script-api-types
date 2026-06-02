import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FogParameters } from '../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
export interface FogStorage extends Object{
    sodium$getFogParameters(): FogParameters;
}