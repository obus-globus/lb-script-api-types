import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { CreativeModeTab } from '../../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { CreativeModeTab$Builder } from '../../../../../net/minecraft/world/item/CreativeModeTab$Builder.d.ts'
export class FabricCreativeModeTabBuilderImpl extends CreativeModeTab$Builder {
    constructor()
    // private hasDisplayName: boolean;
    build(): CreativeModeTab;
    title(arg0: Component): CreativeModeTab$Builder;
}