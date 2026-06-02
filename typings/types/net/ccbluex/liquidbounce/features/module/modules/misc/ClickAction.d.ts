import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MouseClick } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/MouseClick.d.ts'
import type { AbstractContainerMenu } from '../../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { Slot } from '../../../../../../../net/minecraft/world/inventory/Slot.d.ts'
export interface ClickAction extends Object{
    invoke(handler: AbstractContainerMenu, slot: Slot, callback: MouseClick): void;
}