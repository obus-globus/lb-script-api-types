import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Config } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Config.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ConstantValue<V extends Object | number | string | boolean> extends Object implements DependentValue<V> {
    constructor(arg0: V)
    // private value: V;
    get(arg0: Config): V;
    getDependencies(): Identifier[];
}