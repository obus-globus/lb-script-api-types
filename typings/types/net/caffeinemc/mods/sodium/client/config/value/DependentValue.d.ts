import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Config } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Config.d.ts'
export interface DependentValue<V extends Object | number | string | boolean> extends Object{
    get(arg0: Config): V;
    getDependencies(): E[];
}