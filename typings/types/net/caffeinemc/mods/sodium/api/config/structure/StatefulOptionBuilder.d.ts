import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionFlag } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionFlag.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface StatefulOptionBuilder<V extends unknown> extends Object, OptionBuilder {
    setApplyHook(arg0: (param0: ConfigState) => void): StatefulOptionBuilder<V>;
    setBinding(arg0: (param0: V) => void, arg1: () => V): StatefulOptionBuilder<V>;
    setBinding(arg0: OptionBinding<V>): StatefulOptionBuilder<V>;
    setControlHiddenWhenDisabled(arg0: boolean): StatefulOptionBuilder<V>;
    setDefaultProvider(arg0: (param0: ConfigState) => V, ...arg1: Identifier[]): StatefulOptionBuilder<V>;
    setDefaultValue(arg0: V): StatefulOptionBuilder<V>;
    setEnabled(arg0: boolean): OptionBuilder;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, ...arg1: Identifier[]): OptionBuilder;
    setFlags(...arg0: OptionFlag[]): StatefulOptionBuilder<V>;
    setFlags(...arg0: Identifier[]): StatefulOptionBuilder<V>;
    setImpact(arg0: OptionImpact): StatefulOptionBuilder<V>;
    setName(arg0: Component): StatefulOptionBuilder<V>;
    setStorageHandler(arg0: () => void): StatefulOptionBuilder<V>;
    setTooltip(arg0: (param0: V) => Component): StatefulOptionBuilder<V>;
    setTooltip(arg0: Component): StatefulOptionBuilder<V>;
}