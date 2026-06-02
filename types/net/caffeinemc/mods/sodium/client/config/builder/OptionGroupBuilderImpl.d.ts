import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { OptionGroupBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionGroupBuilder.d.ts'
import type { Option } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { OptionGroup } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionGroup.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class OptionGroupBuilderImpl extends Object implements OptionGroupBuilder {
    constructor()
    // private name: Component;
    // private options: Option[];
    addOption(arg0: OptionBuilder): OptionGroupBuilder;
    build(): OptionGroup;
    setName(arg0: Component): OptionGroupBuilder;
}