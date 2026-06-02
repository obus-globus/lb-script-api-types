import type { VFPListEntry } from '../../../../../../com/viaversion/viafabricplus/screen/VFPListEntry.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TitleEntry extends VFPListEntry {
    static CONTENT_PADDING: number;
    static SLOT_MARGIN: number;
    constructor(arg0: Component)
    // private name: Component;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    getNarration(): Component;
    mappedRender(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
}