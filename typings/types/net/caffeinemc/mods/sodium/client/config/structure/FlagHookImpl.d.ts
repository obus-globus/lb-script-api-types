import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { FlagHook } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/FlagHook.d.ts'
export class FlagHookImpl extends Object implements FlagHook {
    constructor(arg0: (param0: E[], param1: ConfigState) => void, arg1: E[])
    // private hook: (param0: E[], param1: ConfigState) => void;
    readonly triggers: E[];
    accept(arg0: E[], arg1: ConfigState): void;
    getTriggers(): E[];
}