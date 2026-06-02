import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { IrisElementRow$ButtonElement } from '../../../../../net/irisshaders/iris/gui/element/IrisElementRow$ButtonElement.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class IrisElementRow$TextButtonElement extends IrisElementRow$ButtonElement<IrisElementRow$TextButtonElement> {
    constructor(arg0: Component, arg1: (param0: IrisElementRow$TextButtonElement) => boolean)
    // private font: Font;
    text: Component;
    renderLabel(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean): void;
}