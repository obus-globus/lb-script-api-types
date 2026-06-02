import type { OptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/OptionBuilder.d.ts'
import type { OptionBuilderImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/builder/OptionBuilderImpl.d.ts'
import type { StaticOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StaticOption.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export abstract class StaticOptionBuilderImpl<O extends StaticOption> extends OptionBuilderImpl<O> {
    constructor(arg0: Identifier)
    // private tooltip: Component;
    getTooltip(): Component;
    setTooltip(arg0: Component): OptionBuilder;
    validateData(): void;
}