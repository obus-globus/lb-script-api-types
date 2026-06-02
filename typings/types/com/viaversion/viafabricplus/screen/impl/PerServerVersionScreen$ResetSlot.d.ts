import type { PerServerVersionScreen$SharedSlot } from '../../../../../com/viaversion/viafabricplus/screen/impl/PerServerVersionScreen$SharedSlot.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class PerServerVersionScreen$ResetSlot extends PerServerVersionScreen$SharedSlot {
    static CONTENT_PADDING: number;
    static SLOT_MARGIN: number;
    constructor(null_: PerServerVersionScreen$ResetSlot)
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    getNarration(): Component;
    mappedMouseClicked(arg0: number, arg1: number, arg2: number): void;
}