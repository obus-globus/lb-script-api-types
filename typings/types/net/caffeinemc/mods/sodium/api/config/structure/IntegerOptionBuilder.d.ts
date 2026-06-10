import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { ControlValueFormatter } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/ControlValueFormatter.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionFlag } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionFlag.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { Range } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/Range.d.ts'
import type { SteppedValidator } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/SteppedValidator.d.ts'
import type { StatefulOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/StatefulOptionBuilder.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface IntegerOptionBuilder extends Object, StatefulOptionBuilder<number> {
    setApplyHook(arg0: (param0: ConfigState) => void): IntegerOptionBuilder;
    setBinding(arg0: (param0: number) => void, arg1: () => number): IntegerOptionBuilder;
    setBinding(arg0: OptionBinding<number>): IntegerOptionBuilder;
    setControlHiddenWhenDisabled(arg0: boolean): IntegerOptionBuilder;
    setDefaultProvider(arg0: (param0: ConfigState) => number, arg1: Identifier[]): IntegerOptionBuilder;
    setDefaultValue(arg0: number): IntegerOptionBuilder;
    setEnabled(arg0: boolean): IntegerOptionBuilder;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): IntegerOptionBuilder;
    setFlags(arg0: OptionFlag[]): IntegerOptionBuilder;
    setFlags(arg0: Identifier[]): IntegerOptionBuilder;
    setImpact(arg0: OptionImpact): IntegerOptionBuilder;
    setName(arg0: Component): IntegerOptionBuilder;
    setRange(arg0: number, arg1: number, arg2: number): IntegerOptionBuilder;
    setRange(arg0: Range): IntegerOptionBuilder;
    setRangeProvider(arg0: (param0: ConfigState) => SteppedValidator, arg1: Identifier[]): IntegerOptionBuilder;
    setStorageHandler(arg0: () => void): IntegerOptionBuilder;
    setTooltip(arg0: (param0: number) => Component): IntegerOptionBuilder;
    setTooltip(arg0: Component): IntegerOptionBuilder;
    setValidator(arg0: SteppedValidator): IntegerOptionBuilder;
    setValidatorProvider(arg0: (param0: ConfigState) => SteppedValidator, arg1: Identifier[]): IntegerOptionBuilder;
    setValueFormatter(arg0: (param0: number) => Component): IntegerOptionBuilder;
}