import type { ShaderPackSelectionList$BaseEntry } from '../../../../../net/irisshaders/iris/gui/element/ShaderPackSelectionList$BaseEntry.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ShaderPackSelectionList$LabelEntry extends ShaderPackSelectionList$BaseEntry {
    static CONTENT_PADDING: number;
    constructor(arg0: Component)
    // private label: Component;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
}