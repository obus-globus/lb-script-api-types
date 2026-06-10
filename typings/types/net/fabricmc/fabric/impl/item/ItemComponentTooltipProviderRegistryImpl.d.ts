import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipDisplay } from '../../../../../net/minecraft/world/item/component/TooltipDisplay.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class ItemComponentTooltipProviderRegistryImpl extends Object {
    static addAfter(paramarg0: DataComponentType<Object>, paramarg1: DataComponentType<TooltipProvider>): void;
    static addBefore(paramarg0: DataComponentType<Object>, paramarg1: DataComponentType<TooltipProvider>): void;
    static addFirst(paramarg0: DataComponentType<TooltipProvider>): void;
    static addLast(paramarg0: DataComponentType<TooltipProvider>): void;
    static hasModdedEntries(): boolean;
    static onAfter(paramarg0: ItemStack, paramarg1: DataComponentType<Object>, paramarg2: Item$TooltipContext, paramarg3: TooltipDisplay, paramarg4: (param0: Component) => void, paramarg5: TooltipFlag, paramarg6: DataComponentType<Object>[]): void;
    static onBefore(paramarg0: ItemStack, paramarg1: DataComponentType<Object>, paramarg2: Item$TooltipContext, paramarg3: TooltipDisplay, paramarg4: (param0: Component) => void, paramarg5: TooltipFlag, paramarg6: DataComponentType<Object>[]): void;
    static onFirst(paramarg0: ItemStack, paramarg1: Item$TooltipContext, paramarg2: TooltipDisplay, paramarg3: (param0: Component) => void, paramarg4: TooltipFlag): void;
    static onLast(paramarg0: ItemStack, paramarg1: Item$TooltipContext, paramarg2: TooltipDisplay, paramarg3: (param0: Component) => void, paramarg4: TooltipFlag): void;
    constructor()
}