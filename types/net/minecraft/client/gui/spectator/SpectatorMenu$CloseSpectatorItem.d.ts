import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SpectatorMenu } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenu.d.ts'
import type { SpectatorMenuItem } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class SpectatorMenu$CloseSpectatorItem extends Object implements SpectatorMenuItem {
    private constructor()
    extractIcon(graphics: GuiGraphicsExtractor, brightness: number, alpha: number): void;
    getName(): Component;
    isEnabled(): boolean;
    selectItem(menu: SpectatorMenu): void;
}