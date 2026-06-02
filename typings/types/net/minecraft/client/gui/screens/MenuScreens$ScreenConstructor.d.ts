import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { MenuAccess } from '../../../../../net/minecraft/client/gui/screens/inventory/MenuAccess.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { MenuType } from '../../../../../net/minecraft/world/inventory/MenuType.d.ts'
export interface MenuScreens$ScreenConstructor<T extends AbstractContainerMenu, U extends Screen & MenuAccess<T>> extends Object{
    create(menu: T, inventory: (Object | null)[], title: Component): U;
    fromPacket(title: Component, type: MenuType<T>, minecraft: Minecraft, containerId: number): void;
}