import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ActiveTextCollector } from '../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { ActiveTextCollector$Parameters } from '../../../../net/minecraft/client/gui/ActiveTextCollector$Parameters.d.ts'
import type { Font } from '../../../../net/minecraft/client/gui/Font.d.ts'
import type { TextAlignment } from '../../../../net/minecraft/client/gui/TextAlignment.d.ts'
import type { GuiTextRenderState } from '../../../../net/minecraft/client/renderer/state/gui/GuiTextRenderState.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export class ActiveTextCollector$ClickableStyleFinder extends Object implements ActiveTextCollector {
    static MIN_SCROLL_PERIOD: number;
    static PERIOD_PER_SCROLLED_PIXEL: number;
    static findElementUnderCursor(paramtext: GuiTextRenderState, paramtestX: number, paramtestY: number, paramoutput: (param0: Style) => void): void;
    static isPointInRectangle(paramx: number, paramy: number, paramleft: number, paramtop: number, paramright: number, parambottom: number): boolean;
    constructor(font: Font, testX: number, testY: number)
    // private defaultParameters: ActiveTextCollector$Parameters;
    // private font: Font;
    // private includeInsertions: boolean;
    // private result: Style;
    // private styleScanner: (param0: Style) => void;
    // private testX: number;
    // private testY: number;
    accept(x: number, y: number, text: Component): void;
    accept(x: number, y: number, text: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, parameters: ActiveTextCollector$Parameters, text: Component): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, parameters: ActiveTextCollector$Parameters, text: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, text: Component): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, text: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): void;
    acceptScrolling(message: Component, centerX: number, left: number, right: number, top: number, bottom: number): void;
    acceptScrolling(message: Component, centerX: number, left: number, right: number, top: number, bottom: number, parameters: ActiveTextCollector$Parameters): void;
    acceptScrollingWithDefaultCenter(message: Component, left: number, right: number, top: number, bottom: number): void;
    defaultParameters(): ActiveTextCollector$Parameters;
    defaultParameters(newParameters: ActiveTextCollector$Parameters): void;
    defaultScrollingHelper(message: Component, centerX: number, left: number, right: number, top: number, bottom: number, lineWidth: number, lineHeight: number, parameters: ActiveTextCollector$Parameters): void;
    includeInsertions(flag: boolean): ActiveTextCollector$ClickableStyleFinder;
    result(): Style;
}