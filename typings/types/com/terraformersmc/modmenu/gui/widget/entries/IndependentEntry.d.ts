import type { ModListWidget } from '../../../../../../com/terraformersmc/modmenu/gui/widget/ModListWidget.d.ts'
import type { ModListEntry } from '../../../../../../com/terraformersmc/modmenu/gui/widget/entries/ModListEntry.d.ts'
import type { Mod } from '../../../../../../com/terraformersmc/modmenu/util/mod/Mod.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class IndependentEntry extends ModListEntry {
    static CONTENT_PADDING: number;
    static UNKNOWN_ICON: Identifier;
    constructor(arg0: Mod, arg1: ModListWidget)
}