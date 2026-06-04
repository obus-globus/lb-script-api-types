import type { ModListWidget } from '../../../../../../com/terraformersmc/modmenu/gui/widget/ModListWidget.d.ts'
import type { ModListEntry } from '../../../../../../com/terraformersmc/modmenu/gui/widget/entries/ModListEntry.d.ts'
import type { Mod } from '../../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ParentEntry extends ModListEntry {
    static CONTENT_PADDING: number;
    static UNKNOWN_ICON: Identifier;
    constructor(arg0: Mod, arg1: Mod[], arg2: ModListWidget)
    children: Mod[];
    // private hoveringIcon: boolean;
    // private list: ModListWidget;
    addChildren(arg0: Mod[]): void;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    getChildren(): Mod[];
    isMouseOver(arg0: number, arg1: number): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    setChildren(arg0: Mod[]): void;
    // private toggleChildren(): void;
}