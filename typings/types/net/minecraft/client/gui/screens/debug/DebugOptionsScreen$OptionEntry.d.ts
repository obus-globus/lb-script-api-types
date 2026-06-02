import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { DebugScreenEntryStatus } from '../../../../../../net/minecraft/client/gui/components/debug/DebugScreenEntryStatus.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { DebugOptionsScreen$AbstractOptionEntry } from '../../../../../../net/minecraft/client/gui/screens/debug/DebugOptionsScreen$AbstractOptionEntry.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class DebugOptionsScreen$OptionEntry extends DebugOptionsScreen$AbstractOptionEntry {
    static CONTENT_PADDING: number;
    constructor(null_: DebugOptionsScreen$OptionEntry, location: Identifier)
    // private always: CycleButton<boolean>;
    // private children: AbstractWidget[];
    // private isAllowed: boolean;
    // private location: Identifier;
    // private name: string;
    // private never: CycleButton<boolean>;
    // private overlay: CycleButton<boolean>;
    children(): GuiEventListener[];
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    narratables(): NarratableEntry[];
    // private narrateButton(booleanCycleButton: CycleButton<boolean>): MutableComponent;
    refreshEntry(): void;
    // private setValue(location: Identifier, never: DebugScreenEntryStatus): void;
}