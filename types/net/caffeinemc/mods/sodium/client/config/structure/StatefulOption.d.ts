import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { DynamicValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DynamicValue.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class StatefulOption<V extends Object | number | string | boolean> extends Option {
    constructor(arg0: Identifier, arg1: E[], arg2: Component, arg3: DependentValue<boolean>, arg4: () => void, arg5: (param0: V) => Component, arg6: OptionImpact, arg7: Identifier[], arg8: DependentValue<V>, arg9: boolean, arg10: OptionBinding<V>, arg11: (param0: ConfigState) => void)
    // private applyDependents: E[];
    readonly applyHook: (param0: ConfigState) => void;
    readonly applyHookId: Identifier;
    readonly binding: OptionBinding<V>;
    readonly controlHiddenWhenDisabled: boolean;
    readonly defaultValue: DependentValue<V>;
    // private dependents: E[];
    readonly flags: Identifier[];
    readonly impact: OptionImpact;
    // private modifiedValue: V;
    readonly storage: () => void;
    readonly tooltipProvider: (param0: V) => Component;
    // private value: V;
    applyChanges(): boolean;
    getAppliedValue(): V;
    getApplyHook(): (param0: ConfigState) => void;
    getApplyHookId(): Identifier;
    getBinding(): OptionBinding<V>;
    getControlHiddenWhenDisabled(): boolean;
    getDefaultValue(): DependentValue<V>;
    getFlags(): Identifier[];
    getImpact(): OptionImpact;
    getStorage(): () => void;
    getTooltip(): Component;
    getTooltipProvider(): (param0: V) => Component;
    getValidatedValue(): V;
    hasChanged(): boolean;
    loadValueInitial(): void;
    modifyValue(arg0: V): void;
    registerApplyDependent(arg0: DynamicValue<Object>): void;
    registerDependent(arg0: DynamicValue<Object>): void;
    resetFromBinding(): void;
    resetToDefault(): void;
    showControl(): boolean;
    validateValue(arg0: V): V;
    visitDependentValues(arg0: (param0: DependentValue<Object>) => void): void;
}