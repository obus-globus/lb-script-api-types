import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PageBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/PageBuilder.d.ts'
import type { Screen } from '../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export interface ExternalPageBuilder extends Object, PageBuilder {
    setName(arg0: Component): ExternalPageBuilder;
    setScreenConsumer(arg0: (param0: Screen) => void): ExternalPageBuilder;
}