import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SpectatorMenuItem } from '../../../../../../net/minecraft/client/gui/spectator/SpectatorMenuItem.d.ts'
export class SpectatorPage extends Object {
    static NO_SELECTION: number;
    constructor(items: SpectatorMenuItem[], selection: number)
    // private items: SpectatorMenuItem[];
    // private selection: number;
    getItem(slot: number): SpectatorMenuItem;
    getSelectedSlot(): number;
}