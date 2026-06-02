import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpectatorMenuItem } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export interface SpectatorMenuCategory extends Object{
    getItems(): SpectatorMenuItem[];
    getPrompt(): Component;
}