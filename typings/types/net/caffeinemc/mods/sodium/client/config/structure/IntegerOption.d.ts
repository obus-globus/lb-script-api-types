import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { ControlValueFormatter } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/ControlValueFormatter.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { SteppedValidator } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/SteppedValidator.d.ts'
import type { StatefulOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StatefulOption.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Control } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/Control.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class IntegerOption extends StatefulOption<number> {
    constructor(arg0: Identifier, arg1: E[], arg2: Component, arg3: DependentValue<boolean>, arg4: () => void, arg5: (param0: number) => Component, arg6: OptionImpact, arg7: Identifier[], arg8: DependentValue<number>, arg9: boolean, arg10: OptionBinding<number>, arg11: (param0: ConfigState) => void, arg12: DependentValue<SteppedValidator>, arg13: (param0: number) => net.minecraft.network.chat.Component)
    // private validator: DependentValue<SteppedValidator>;
    readonly valueFormatter: (param0: number) => net.minecraft.network.chat.Component;
    createControl(): Control;
    formatValue(arg0: number): Component;
    getSteppedValidator(): SteppedValidator;
    getValidatorProvider(): DependentValue<SteppedValidator>;
    getValueFormatter(): (param0: number) => net.minecraft.network.chat.Component;
    validateValue(arg0: number): number;
    visitDependentValues(arg0: (param0: DependentValue<Object>) => void): void;
}