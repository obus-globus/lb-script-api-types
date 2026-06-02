import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipDisplay } from '../../../../../net/minecraft/world/item/component/TooltipDisplay.d.ts'
export class ItemComponentTooltipProviderRegistryImpl extends Object {
    static addAfter(paramarg0: DataComponentType<Object>, paramarg1: DataComponentType<Object>): void;
    static addBefore(paramarg0: DataComponentType<Object>, paramarg1: DataComponentType<Object>): void;
    static addFirst(paramarg0: DataComponentType<Object>): void;
    static addLast(paramarg0: DataComponentType<Object>): void;
    static hasModdedEntries(): boolean;
    static onAfter(paramarg0: ItemStack, paramarg1: DataComponentType<Object>, paramarg2: Item$TooltipContext, paramarg3: TooltipDisplay, paramarg4: (param0: Component) => void, paramarg5: TooltipFlag, paramarg6: (Object | null)[]): void;
    static onBefore(paramarg0: ItemStack, paramarg1: DataComponentType<Object>, paramarg2: Item$TooltipContext, paramarg3: TooltipDisplay, paramarg4: (param0: Component) => void, paramarg5: TooltipFlag, paramarg6: (Object | null)[]): void;
    static onFirst(paramarg0: ItemStack, paramarg1: Item$TooltipContext, paramarg2: TooltipDisplay, paramarg3: (param0: Component) => void, paramarg4: TooltipFlag): void;
    static onLast(paramarg0: ItemStack, paramarg1: Item$TooltipContext, paramarg2: TooltipDisplay, paramarg3: (param0: Component) => void, paramarg4: TooltipFlag): void;
    constructor()
}