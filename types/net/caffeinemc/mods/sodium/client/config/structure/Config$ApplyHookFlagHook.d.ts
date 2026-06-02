import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { FlagHook } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/FlagHook.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class Config$ApplyHookFlagHook extends Record implements FlagHook {
    private constructor(applyHookId: Identifier, applyHook: (param0: ConfigState) => void)
    // private applyHook: (param0: ConfigState) => void;
    // private applyHookId: Identifier;
    accept(arg0: E[], arg1: ConfigState): void;
    applyHook(): (param0: ConfigState) => void;
    applyHookId(): Identifier;
    equals(arg0: Object | null): boolean;
    getTriggers(): E[];
    hashCode(): number;
    toString(): string;
}