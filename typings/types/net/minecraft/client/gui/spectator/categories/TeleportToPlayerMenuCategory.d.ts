import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SpectatorMenu } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenu.d.ts'
import type { SpectatorMenuCategory } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenuCategory.d.ts'
import type { SpectatorMenuItem } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
import type { PlayerInfo } from '../../../../../../net/minecraft/client/multiplayer/PlayerInfo.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TeleportToPlayerMenuCategory extends Object implements SpectatorMenuCategory, SpectatorMenuItem {
    constructor()
    constructor(profiles: PlayerInfo[])
    readonly items: SpectatorMenuItem[];
    extractIcon(graphics: GuiGraphicsExtractor, brightness: number, alpha: number): void;
    getItems(): SpectatorMenuItem[];
    getName(): Component;
    getPrompt(): Component;
    isEnabled(): boolean;
    selectItem(menu: SpectatorMenu): void;
}