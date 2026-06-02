import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SpectatorMenuCategory } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenuCategory.d.ts'
import type { SpectatorMenuItem } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
import type { SpectatorMenuListener } from '../../../../../net/minecraft/client/gui/spectator/SpectatorMenuListener.d.ts'
import type { SpectatorPage } from '../../../../../net/minecraft/client/gui/spectator/categories/SpectatorPage.d.ts'
export class SpectatorMenu extends Object {
    static EMPTY_SLOT: SpectatorMenuItem;
    constructor(listener: SpectatorMenuListener)
    // private category: SpectatorMenuCategory;
    // private listener: SpectatorMenuListener;
    // private page: number;
    readonly selectedSlot: number;
    exit(): void;
    getCurrentPage(): SpectatorPage;
    getItem(slot: number): SpectatorMenuItem;
    getItems(): SpectatorMenuItem[];
    getSelectedCategory(): SpectatorMenuCategory;
    getSelectedItem(): SpectatorMenuItem;
    getSelectedSlot(): number;
    selectCategory(category: SpectatorMenuCategory): void;
    selectSlot(slot: number): void;
}