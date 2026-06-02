import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { StorageEventHandler } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/StorageEventHandler.d.ts'
import type { OptionBinding } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionBinding.d.ts'
import type { OptionImpact } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/OptionImpact.d.ts'
import type { StatefulOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StatefulOption.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Control } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/Control.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class BooleanOption extends StatefulOption<boolean> {
    constructor(arg0: Identifier, arg1: E[], arg2: Component, arg3: DependentValue<boolean>, arg4: () => void, arg5: (param0: boolean) => Component, arg6: OptionImpact, arg7: Identifier[], arg8: DependentValue<boolean>, arg9: boolean, arg10: OptionBinding<boolean>, arg11: (param0: ConfigState) => void)
    createControl(): Control;
    validateValue(arg0: boolean): boolean;
}