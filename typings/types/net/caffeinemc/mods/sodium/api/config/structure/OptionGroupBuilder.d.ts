import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface OptionGroupBuilder extends Object{
    addOption(arg0: OptionBuilder): OptionGroupBuilder;
    setName(arg0: Component): OptionGroupBuilder;
}