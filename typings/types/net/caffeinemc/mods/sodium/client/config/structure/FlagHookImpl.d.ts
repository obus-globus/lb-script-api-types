import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { FlagHook } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/FlagHook.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class FlagHookImpl extends Object implements FlagHook {
    constructor(arg0: (param0: Identifier[], param1: ConfigState) => void, arg1: Identifier[])
    // private hook: (param0: Identifier[], param1: ConfigState) => void;
    readonly triggers: Identifier[];
    accept(arg0: Identifier[], arg1: ConfigState): void;
    getTriggers(): Identifier[];
}