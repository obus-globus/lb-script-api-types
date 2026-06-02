import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionFlag } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionFlag.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { BooleanOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/BooleanOptionBuilder.d.ts'
import type { StatefulOptionBuilderImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/builder/StatefulOptionBuilderImpl.d.ts'
import type { BooleanOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/BooleanOption.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class BooleanOptionBuilderImpl extends StatefulOptionBuilderImpl<BooleanOption, boolean> implements BooleanOptionBuilder {
    constructor(arg0: Identifier)
    build(): BooleanOption;
    getOptionClass(): Class<BooleanOption>;
    setApplyHook(arg0: (param0: ConfigState) => void): BooleanOptionBuilder;
    setBinding(arg0: (param0: boolean) => void, arg1: () => boolean): BooleanOptionBuilder;
    setBinding(arg0: OptionBinding<boolean>): BooleanOptionBuilder;
    setControlHiddenWhenDisabled(arg0: boolean): BooleanOptionBuilder;
    setDefaultProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): BooleanOptionBuilder;
    setDefaultValue(arg0: boolean): BooleanOptionBuilder;
    setEnabled(arg0: boolean): BooleanOptionBuilder;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): BooleanOptionBuilder;
    setFlags(arg0: OptionFlag[]): BooleanOptionBuilder;
    setFlags(arg0: Identifier[]): BooleanOptionBuilder;
    setImpact(arg0: OptionImpact): BooleanOptionBuilder;
    setName(arg0: Component): BooleanOptionBuilder;
    setStorageHandler(arg0: () => void): BooleanOptionBuilder;
    setTooltip(arg0: (param0: boolean) => Component): BooleanOptionBuilder;
    setTooltip(arg0: Component): BooleanOptionBuilder;
}