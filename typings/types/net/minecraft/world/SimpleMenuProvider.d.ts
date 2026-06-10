import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { MenuProvider } from '../../../net/minecraft/world/MenuProvider.d.ts'
import type { Player } from '../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { MenuConstructor } from '../../../net/minecraft/world/inventory/MenuConstructor.d.ts'
export class SimpleMenuProvider extends Object implements MenuProvider {
    constructor(menuConstructor: (param0: number, param1: (Object | null)[], param2: Player) => AbstractContainerMenu, title: Component)
    menuConstructor: (param0: number, param1: (Object | null)[], param2: Player) => AbstractContainerMenu;
    // private title: Component;
    createMenu(containerId: number, inventory: (Object | null)[], player: Player): AbstractContainerMenu;
    getDisplayName(): Component;
}