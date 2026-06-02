import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { ConfigState } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/ConfigState.d.ts'
import type { ExternalButtonOptionBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ExternalButtonOptionBuilder.d.ts'
import type { StaticOptionBuilderImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/builder/StaticOptionBuilderImpl.d.ts'
import type { ExternalButtonOption } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ExternalButtonOption.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ExternalButtonOptionBuilderImpl extends StaticOptionBuilderImpl<ExternalButtonOption> implements ExternalButtonOptionBuilder {
    constructor(arg0: Identifier)
    // private currentScreenConsumer: (param0: Screen) => void;
    build(): ExternalButtonOption;
    getCurrentScreenConsumer(): (param0: Screen) => void;
    getOptionClass(): Class<ExternalButtonOption>;
    setEnabled(arg0: boolean): ExternalButtonOptionBuilder;
    setEnabledProvider(arg0: (param0: ConfigState) => boolean, arg1: Identifier[]): ExternalButtonOptionBuilder;
    setName(arg0: Component): ExternalButtonOptionBuilder;
    setScreenConsumer(arg0: (param0: Screen) => void): ExternalButtonOptionBuilder;
    setTooltip(arg0: Component): ExternalButtonOptionBuilder;
    validateData(): void;
}