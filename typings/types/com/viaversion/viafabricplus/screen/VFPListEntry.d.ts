import type { GuiGraphicsExtractor } from '../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { MouseButtonEvent } from '../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class VFPListEntry extends ObjectSelectionList$Entry<VFPListEntry> {
    static CONTENT_PADDING: number;
    static SLOT_MARGIN: number;
    constructor()
    // private context: GuiGraphicsExtractor;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
    mappedMouseClicked(arg0: number, arg1: number, arg2: number): void;
    mappedRender(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: number): void;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    renderScrollableText(arg0: Component, arg1: number): void;
    renderScrollableText(arg0: Component, arg1: number, arg2: number): void;
    renderTooltip(arg0: Component, arg1: number, arg2: number): void;
}