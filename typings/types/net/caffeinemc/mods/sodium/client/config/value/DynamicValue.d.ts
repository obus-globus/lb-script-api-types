import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { Config } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Config.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DynamicValue<V extends Object | number | string | boolean> extends Object implements ConfigState, DependentValue<V> {
    static UPDATE_ON_APPLY: Identifier;
    static UPDATE_ON_REBUILD: Identifier;
    constructor(arg0: (param0: ConfigState) => V, arg1: Identifier[])
    readonly dependencies: Identifier[];
    // private parentOption: Identifier;
    // private provider: (param0: ConfigState) => V;
    // private state: Config;
    // private valueCache: V;
    allowReadingParentOption(arg0: Identifier): void;
    get(arg0: Config): V;
    getDependencies(): E[];
    getDependencies(): E[];
    // private getReadType(arg0: Identifier): boolean;
    invalidateCache(): void;
    readBooleanOption(arg0: Identifier): boolean;
    readEnumOption<E extends Enum<E>>(arg0: Identifier, arg1: Class<E>): E;
    readIntOption(arg0: Identifier): number;
}