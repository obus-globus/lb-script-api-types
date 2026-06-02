import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Renderable } from '../../../../../net/minecraft/client/gui/components/Renderable.d.ts'
import type { PreeditEvent } from '../../../../../net/minecraft/client/input/PreeditEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class IMEPreeditOverlay extends Object implements Renderable {
    constructor(contents: PreeditEvent, font: Font, inputHeight: number)
    // private caretPos: number;
    // private font: Font;
    // private initTimeMs: number;
    // private inputHeight: number;
    // private inputLeft: number;
    // private inputTop: number;
    // private preEditText: Component;
    // private preEditTextWidth: number;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    updateInputPosition(inputLeft: number, inputTop: number): void;
}