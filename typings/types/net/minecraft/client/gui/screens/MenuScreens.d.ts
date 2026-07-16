import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { MenuScreens$ScreenConstructor } from '../../../../../net/minecraft/client/gui/screens/MenuScreens$ScreenConstructor.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { MenuAccess } from '../../../../../net/minecraft/client/gui/screens/inventory/MenuAccess.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { MenuType } from '../../../../../net/minecraft/world/inventory/MenuType.d.ts'
export class MenuScreens extends Object {
    static create<T extends AbstractContainerMenu>(paramtype: MenuType<T>, paramminecraft: Minecraft, paramcontainerId: number, paramtitle: Component): void;
    static getConstructor<T extends AbstractContainerMenu>(paramtype: MenuType<T>): MenuScreens$ScreenConstructor<T, any>;
    static register<M extends AbstractContainerMenu, U extends Screen & MenuAccess<M>>(paramtype: MenuType<M>, paramfactory: MenuScreens$ScreenConstructor<M, U>): void;
    static selfTest(): boolean;
    constructor()
}