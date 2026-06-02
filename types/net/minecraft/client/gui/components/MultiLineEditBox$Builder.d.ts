import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { MultiLineEditBox } from '../../../../../net/minecraft/client/gui/components/MultiLineEditBox.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class MultiLineEditBox$Builder extends Object {
    constructor()
    // private cursorColor: number;
    // private placeholder: Component;
    // private showBackground: boolean;
    // private showDecorations: boolean;
    // private textColor: number;
    // private textShadow: boolean;
    // private x: number;
    // private y: number;
    build(font: Font, width: number, height: number, narration: Component): MultiLineEditBox;
    setCursorColor(cursorColor: number): MultiLineEditBox$Builder;
    setPlaceholder(placeholder: Component): MultiLineEditBox$Builder;
    setShowBackground(showBackground: boolean): MultiLineEditBox$Builder;
    setShowDecorations(showDecorations: boolean): MultiLineEditBox$Builder;
    setTextColor(textColor: number): MultiLineEditBox$Builder;
    setTextShadow(textShadow: boolean): MultiLineEditBox$Builder;
    setX(x: number): MultiLineEditBox$Builder;
    setY(y: number): MultiLineEditBox$Builder;
}