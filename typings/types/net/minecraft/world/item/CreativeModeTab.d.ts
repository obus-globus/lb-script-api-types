import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricCreativeModeTabImpl } from '../../../../net/fabricmc/fabric/impl/creativetab/FabricCreativeModeTabImpl.d.ts'
import type { CreativeModeTabAccessor } from '../../../../net/fabricmc/fabric/mixin/creativetab/CreativeModeTabAccessor.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { CreativeModeTab$Builder } from '../../../../net/minecraft/world/item/CreativeModeTab$Builder.d.ts'
import type { CreativeModeTab$DisplayItemsGenerator } from '../../../../net/minecraft/world/item/CreativeModeTab$DisplayItemsGenerator.d.ts'
import type { CreativeModeTab$ItemDisplayParameters } from '../../../../net/minecraft/world/item/CreativeModeTab$ItemDisplayParameters.d.ts'
import type { CreativeModeTab$Output } from '../../../../net/minecraft/world/item/CreativeModeTab$Output.d.ts'
import type { CreativeModeTab$Row } from '../../../../net/minecraft/world/item/CreativeModeTab$Row.d.ts'
import type { CreativeModeTab$Type } from '../../../../net/minecraft/world/item/CreativeModeTab$Type.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CreativeModeTab extends Object implements FabricCreativeModeTabImpl, CreativeModeTabAccessor {
    static TABS_PER_PAGE: number;
    static builder(paramrow: CreativeModeTab$Row, paramcolumn: number): CreativeModeTab$Builder;
    static createTextureLocation(paramname: string): Identifier;
    private constructor(row: CreativeModeTab$Row, column: number, type: CreativeModeTab$Type, displayName: Component, iconGenerator: () => ItemStack, displayItemsGenerator: (param0: CreativeModeTab$ItemDisplayParameters, param1: CreativeModeTab$Output) => void)
    readonly alignedRight: boolean;
    readonly backgroundTexture: Identifier;
    // private canScroll: boolean;
    readonly displayItems: E[];
    // private displayItemsGenerator: (param0: CreativeModeTab$ItemDisplayParameters, param1: CreativeModeTab$Output) => void;
    // private displayItemsSearchTab: ItemStack[];
    readonly displayName: Component;
    // private iconGenerator: () => ItemStack;
    // private iconItemStack: ItemStack;
    // private page: number;
    // private showTitle: boolean;
    readonly type: CreativeModeTab$Type;
    buildContents(parameters: CreativeModeTab$ItemDisplayParameters): void;
    canScroll(): boolean;
    column(): number;
    contains(stack: ItemStack): boolean;
    fabric_getPage(): number;
    fabric_setPage(arg0: number): void;
    getBackgroundTexture(): Identifier;
    getDisplayItems(): E[];
    getDisplayName(): Component;
    getIconItem(): ItemStack;
    getSearchTabDisplayItems(): E[];
    getType(): CreativeModeTab$Type;
    hasAnyItems(): boolean;
    isAlignedRight(): boolean;
    row(): CreativeModeTab$Row;
    shouldDisplay(): boolean;
    showTitle(): boolean;
}