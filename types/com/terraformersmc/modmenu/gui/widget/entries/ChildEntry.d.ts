import type { ModListWidget } from '../../../../../../com/terraformersmc/modmenu/gui/widget/ModListWidget.d.ts'
import type { ModListEntry } from '../../../../../../com/terraformersmc/modmenu/gui/widget/entries/ModListEntry.d.ts'
import type { ParentEntry } from '../../../../../../com/terraformersmc/modmenu/gui/widget/entries/ParentEntry.d.ts'
import type { Mod } from '../../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ChildEntry extends ModListEntry {
    static CONTENT_PADDING: number;
    static UNKNOWN_ICON: Identifier;
    constructor(arg0: Mod, arg1: ParentEntry, arg2: ModListWidget, arg3: boolean)
    // private bottomChild: boolean;
    // private parent: ParentEntry;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    getXOffset(): number;
    keyPressed(arg0: KeyEvent): boolean;
}