import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { ExternalPageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ExternalPageBuilder.d.ts'
import type { PageBuilderImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/builder/PageBuilderImpl.d.ts'
import type { ExternalPage } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ExternalPage.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ExternalPageBuilderImpl extends PageBuilderImpl implements ExternalPageBuilder {
    constructor()
    // private currentScreenConsumer: (param0: Screen) => void;
    build(): ExternalPage;
    prepareBuild(): void;
    setName(arg0: Component): ExternalPageBuilderImpl;
    setScreenConsumer(arg0: (param0: Screen) => void): ExternalPageBuilder;
}