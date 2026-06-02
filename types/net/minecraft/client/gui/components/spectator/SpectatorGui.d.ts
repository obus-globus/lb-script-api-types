import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SpectatorMenu } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenu.d.ts'
import type { SpectatorMenuItem } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
import type { SpectatorMenuListener } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenuListener.d.ts'
import type { SpectatorPage } from '../../../../../../net/minecraft/client/gui/spectator/categories/SpectatorPage.d.ts'
export class SpectatorGui extends Object implements SpectatorMenuListener {
    constructor(minecraft: Minecraft)
    // private lastSelectionTime: number;
    // private menu: SpectatorMenu;
    // private minecraft: Minecraft;
    extractAction(graphics: GuiGraphicsExtractor): void;
    extractHotbar(graphics: GuiGraphicsExtractor): void;
    extractPage(graphics: GuiGraphicsExtractor, alpha: number, screenCenter: number, y: number, page: SpectatorPage): void;
    // private extractSlot(graphics: GuiGraphicsExtractor, slot: number, x: number, y: number, alpha: number, item: SpectatorMenuItem): void;
    // private getHotbarAlpha(): number;
    isMenuActive(): boolean;
    onHotbarActionKeyPressed(): void;
    onHotbarSelected(slot: number): void;
    onMouseScrolled(wheel: number): void;
    onSpectatorMenuClosed(menu: SpectatorMenu): void;
}