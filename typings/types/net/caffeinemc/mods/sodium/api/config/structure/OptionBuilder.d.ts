import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface OptionBuilder extends Object {
    setEnabled(arg0: boolean): OptionBuilder;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): OptionBuilder;
    setName(arg0: Component): OptionBuilder;
    setTooltip(arg0: Component): OptionBuilder;
}