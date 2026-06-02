import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Page } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Page.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class PageBuilderImpl extends Object {
    constructor()
    // private name: Component;
    build(): Page;
    prepareBuild(): void;
    setName(arg0: Component): PageBuilderImpl;
}