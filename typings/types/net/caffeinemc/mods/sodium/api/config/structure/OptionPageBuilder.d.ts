import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { OptionGroupBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionGroupBuilder.d.ts'
import type { PageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/PageBuilder.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface OptionPageBuilder extends Object, PageBuilder{
    addOption(arg0: OptionBuilder): OptionPageBuilder;
    addOptionGroup(arg0: OptionGroupBuilder): OptionPageBuilder;
    setName(arg0: Component): OptionPageBuilder;
}