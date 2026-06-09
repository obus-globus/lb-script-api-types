import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionFlag } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionFlag.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { StatefulOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/StatefulOptionBuilder.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface EnumOptionBuilder<E extends Enum<E>> extends Object, StatefulOptionBuilder<E> {
    setAllowedValues(arg0: E[]): EnumOptionBuilder<E>;
    setAllowedValuesProvider(arg0: (param0: ConfigState) => E[], arg1: Identifier[]): EnumOptionBuilder<E>;
    setApplyHook(arg0: (param0: ConfigState) => void): EnumOptionBuilder<E>;
    setBinding(arg0: (param0: E) => void, arg1: () => E): EnumOptionBuilder<E>;
    setBinding(arg0: OptionBinding<E>): EnumOptionBuilder<E>;
    setControlHiddenWhenDisabled(arg0: boolean): EnumOptionBuilder<E>;
    setDefaultProvider(arg0: (param0: ConfigState) => E, arg1: Identifier[]): EnumOptionBuilder<E>;
    setDefaultValue(arg0: E): EnumOptionBuilder<E>;
    setElementNameProvider(arg0: (param0: E) => Component): EnumOptionBuilder<E>;
    setEnabled(arg0: boolean): EnumOptionBuilder<E>;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): EnumOptionBuilder<E>;
    setFlags(arg0: OptionFlag[]): EnumOptionBuilder<E>;
    setFlags(arg0: Identifier[]): EnumOptionBuilder<E>;
    setImpact(arg0: OptionImpact): EnumOptionBuilder<E>;
    setName(arg0: Component): EnumOptionBuilder<E>;
    setStorageHandler(arg0: () => void): EnumOptionBuilder<E>;
    setTooltip(arg0: (param0: E) => Component): EnumOptionBuilder<E>;
    setTooltip(arg0: Component): EnumOptionBuilder<E>;
}