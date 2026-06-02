import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { CreativeModeTab } from '../../../../net/minecraft/world/item/CreativeModeTab.d.ts'
import type { CreativeModeTab$DisplayItemsGenerator } from '../../../../net/minecraft/world/item/CreativeModeTab$DisplayItemsGenerator.d.ts'
import type { CreativeModeTab$ItemDisplayParameters } from '../../../../net/minecraft/world/item/CreativeModeTab$ItemDisplayParameters.d.ts'
import type { CreativeModeTab$Output } from '../../../../net/minecraft/world/item/CreativeModeTab$Output.d.ts'
import type { CreativeModeTab$Row } from '../../../../net/minecraft/world/item/CreativeModeTab$Row.d.ts'
import type { CreativeModeTab$Type } from '../../../../net/minecraft/world/item/CreativeModeTab$Type.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CreativeModeTab$Builder extends Object {
    constructor(row: CreativeModeTab$Row, column: number)
    // private alignedRight: boolean;
    // private backgroundTexture: Identifier;
    // private canScroll: boolean;
    // private column: number;
    // private displayItemsGenerator: (param0: CreativeModeTab$ItemDisplayParameters, param1: CreativeModeTab$Output) => void;
    // private displayName: Component;
    // private iconGenerator: () => ItemStack;
    // private row: CreativeModeTab$Row;
    // private showTitle: boolean;
    // private type: CreativeModeTab$Type;
    alignedRight(): CreativeModeTab$Builder;
    backgroundTexture(backgroundTexture: Identifier): CreativeModeTab$Builder;
    build(): CreativeModeTab;
    displayItems(displayItemsGenerator: (param0: CreativeModeTab$ItemDisplayParameters, param1: CreativeModeTab$Output) => void): CreativeModeTab$Builder;
    hideTitle(): CreativeModeTab$Builder;
    icon(iconGenerator: () => ItemStack): CreativeModeTab$Builder;
    noScrollBar(): CreativeModeTab$Builder;
    title(displayName: Component): CreativeModeTab$Builder;
    type(type: CreativeModeTab$Type): CreativeModeTab$Builder;
}