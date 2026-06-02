import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { OptionGroupBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionGroupBuilder.d.ts'
import type { OptionPageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionPageBuilder.d.ts'
import type { PageBuilderImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/builder/PageBuilderImpl.d.ts'
import type { OptionGroup } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionGroup.d.ts'
import type { OptionPage } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/OptionPage.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class OptionPageBuilderImpl extends PageBuilderImpl implements OptionPageBuilder {
    constructor()
    // private groups: OptionGroup[];
    // private looseOptions: OptionBuilder[];
    addOption(arg0: OptionBuilder): OptionPageBuilder;
    addOptionGroup(arg0: OptionGroupBuilder): OptionPageBuilder;
    build(): OptionPage;
    prepareBuild(): void;
    setName(arg0: Component): OptionPageBuilderImpl;
}