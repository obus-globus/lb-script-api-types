import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpectatorMenuCategory } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenuCategory.d.ts'
import type { SpectatorMenuItem } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class RootSpectatorMenuCategory extends Object implements SpectatorMenuCategory {
    constructor()
    readonly items: SpectatorMenuItem[];
    getItems(): SpectatorMenuItem[];
    getPrompt(): Component;
}