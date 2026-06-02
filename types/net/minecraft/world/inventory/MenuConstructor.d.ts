import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export interface MenuConstructor extends Object{
    createMenu(containerId: number, inventory: (Object | null)[], player: Player): AbstractContainerMenu;
}