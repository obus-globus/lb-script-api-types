import type { Ops } from '../../../../../../com/mojang/realmsclient/dto/Ops.d.ts'
import type { PlayerInfo } from '../../../../../../com/mojang/realmsclient/dto/PlayerInfo.d.ts'
import type { RealmsPlayersTab$Entry } from '../../../../../../com/mojang/realmsclient/gui/screens/configuration/RealmsPlayersTab$Entry.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
export class RealmsPlayersTab$PlayerEntry extends RealmsPlayersTab$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsPlayersTab$PlayerEntry, playerInfo: PlayerInfo)
    // private makeOpButton: Button;
    // private playerInfo: PlayerInfo;
    // private removeButton: Button;
    // private removeOpButton: Button;
    // private activeOpButton(): Button;
    children(): GuiEventListener[];
    // private deop(index: number): void;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    narratables(): NarratableEntry[];
    // private op(index: number): void;
    // private uninvite(index: number): void;
    // private updateOpButtons(): void;
    // private updateOps(ops: Ops): void;
}