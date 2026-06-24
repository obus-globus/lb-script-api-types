import type { VFPListEntry } from '../../../../../../com/viaversion/viafabricplus/screen/VFPListEntry.d.ts'
import type { BedrockRealmsScreen } from '../../../../../../com/viaversion/viafabricplus/screen/impl/realms/BedrockRealmsScreen.d.ts'
import type { BedrockRealmsScreen$SlotList } from '../../../../../../com/viaversion/viafabricplus/screen/impl/realms/BedrockRealmsScreen$SlotList.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsServer } from '../../../../../../net/raphimc/minecraftauth/extra/realms/model/RealmsServer.d.ts'
export class BedrockRealmsScreen$SlotEntry extends VFPListEntry {
    static CONTENT_PADDING: number;
    static SLOT_MARGIN: number;
    constructor(null_: BedrockRealmsScreen, arg1: BedrockRealmsScreen$SlotList, arg2: RealmsServer)
    // private realmsServer: RealmsServer;
    // private slotList: BedrockRealmsScreen$SlotList;
    getNarration(): Component;
    mappedRender(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
}