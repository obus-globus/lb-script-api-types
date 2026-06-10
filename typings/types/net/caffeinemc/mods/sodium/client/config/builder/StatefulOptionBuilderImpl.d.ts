import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionFlag } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionFlag.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { StatefulOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/StatefulOptionBuilder.d.ts'
import type { OptionBuilderImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/builder/OptionBuilderImpl.d.ts'
import type { StatefulOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StatefulOption.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class StatefulOptionBuilderImpl<O extends StatefulOption<V>, V extends Object | number | string | boolean> extends OptionBuilderImpl<O> implements StatefulOptionBuilder<V> {
    constructor(arg0: Identifier)
    // private applyHook: (param0: ConfigState) => void;
    // private binding: OptionBinding<V>;
    // private controlHiddenWhenDisabled: boolean;
    // private defaultValue: DependentValue<V>;
    // private flags: Identifier[];
    // private impact: OptionImpact;
    // private storage: () => void;
    // private tooltipProvider: (param0: V) => Component;
    getApplyHook(): (param0: ConfigState) => void;
    getBinding(): OptionBinding<V>;
    getControlHiddenWhenDisabled(): boolean;
    getDefaultValue(): DependentValue<V>;
    getDependencies(): Identifier[];
    getFlags(): Identifier[];
    getImpact(): OptionImpact;
    getStorage(): () => void;
    getTooltipProvider(): (param0: V) => Component;
    setApplyHook(arg0: (param0: ConfigState) => void): StatefulOptionBuilder<V>;
    setBinding(arg0: (param0: V) => void, arg1: () => V): StatefulOptionBuilder<V>;
    setBinding(arg0: OptionBinding<V>): StatefulOptionBuilder<V>;
    setControlHiddenWhenDisabled(arg0: boolean): StatefulOptionBuilder<V>;
    setDefaultProvider(arg0: (param0: ConfigState) => V, arg1: Identifier[]): StatefulOptionBuilder<V>;
    setDefaultValue(arg0: V): StatefulOptionBuilder<V>;
    setEnabled(arg0: boolean): StatefulOptionBuilder<V>;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): StatefulOptionBuilder<V>;
    setFlags(arg0: OptionFlag[]): StatefulOptionBuilder<V>;
    setFlags(arg0: Identifier[]): StatefulOptionBuilder<V>;
    setImpact(arg0: OptionImpact): StatefulOptionBuilder<V>;
    setName(arg0: Component): StatefulOptionBuilder<V>;
    setStorageHandler(arg0: () => void): StatefulOptionBuilder<V>;
    setTooltip(arg0: (param0: V) => Component): StatefulOptionBuilder<V>;
    setTooltip(arg0: Component): StatefulOptionBuilder<V>;
    validateData(): void;
}