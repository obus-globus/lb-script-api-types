import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { StaticOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StaticOption.d.ts'
import type { DependentValue } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/value/DependentValue.d.ts'
import type { Control } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/Control.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ExternalButtonOption extends StaticOption {
    constructor(arg0: Identifier, arg1: Identifier[], arg2: Component, arg3: DependentValue<boolean>, arg4: Component, arg5: (param0: Screen) => void)
    readonly currentScreenConsumer: (param0: Screen) => void;
    createControl(): Control;
    getCurrentScreenConsumer(): (param0: Screen) => void;
}