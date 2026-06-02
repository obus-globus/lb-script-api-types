import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Item$TooltipContext } from '../../../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TooltipFlag } from '../../../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
export interface ItemTooltipCallback extends Object{
    getTooltip(arg0: ItemStack, arg1: Item$TooltipContext, arg2: TooltipFlag, arg3: Component[]): void;
}