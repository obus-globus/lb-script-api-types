import type { Backup } from '../../../../../../com/mojang/realmsclient/dto/Backup.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { ContainerObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList$Entry.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class RealmsBackupScreen$Entry extends ContainerObjectSelectionList$Entry<RealmsBackupScreen$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: RealmsBackupScreen$Entry, backup: Backup)
    // private backup: Backup;
    // private changesButton: Button;
    // private children: AbstractWidget[];
    // private restoreButton: Button;
    // private addToChangeList(key: string): void;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    narratables(): NarratableEntry[];
    // private narrationForBackupEntry(defaultNarrationSupplier: () => MutableComponent): MutableComponent;
    // private populateChangeList(backup: Backup): void;
    // private restoreClicked(): void;
}