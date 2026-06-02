import type { VFPListEntry } from '../../../../../../com/viaversion/viafabricplus/screen/VFPListEntry.d.ts'
import type { BCServerInfo } from '../../../../../../de/florianreuth/classic4j/model/betacraft/BCServerInfo.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class BetaCraftScreen$ServerSlot extends VFPListEntry {
    static CONTENT_PADDING: number;
    static SLOT_MARGIN: number;
    constructor(arg0: BCServerInfo)
    // private server: BCServerInfo;
    getNarration(): Component;
    mappedMouseClicked(arg0: number, arg1: number, arg2: number): void;
    mappedRender(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
}