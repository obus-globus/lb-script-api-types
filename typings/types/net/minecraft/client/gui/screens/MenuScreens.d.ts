import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { MenuScreens$ScreenConstructor } from '../../../../../net/minecraft/client/gui/screens/MenuScreens$ScreenConstructor.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MenuType } from '../../../../../net/minecraft/world/inventory/MenuType.d.ts'
export class MenuScreens extends Object {
    static create(paramtype: MenuType<Object>, paramminecraft: Minecraft, paramcontainerId: number, paramtitle: Component): void;
    static getConstructor(paramtype: MenuType<Object>): MenuScreens$ScreenConstructor<Object, Object>;
    static register(paramtype: MenuType<Object>, paramfactory: MenuScreens$ScreenConstructor<Object, Object>): void;
    static selfTest(): boolean;
    constructor()
}