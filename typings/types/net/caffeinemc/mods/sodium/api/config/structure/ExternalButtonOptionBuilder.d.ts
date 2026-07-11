import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface ExternalButtonOptionBuilder extends Object, OptionBuilder {
    setEnabled(arg0: boolean): ExternalButtonOptionBuilder;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, ...arg1: Identifier[]): ExternalButtonOptionBuilder;
    setName(arg0: Component): ExternalButtonOptionBuilder;
    setScreenConsumer(arg0: (param0: Screen) => void): ExternalButtonOptionBuilder;
    setTooltip(arg0: Component): ExternalButtonOptionBuilder;
}