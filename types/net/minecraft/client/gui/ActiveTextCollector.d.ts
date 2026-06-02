import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ActiveTextCollector$Parameters } from '../../../../net/minecraft/client/gui/ActiveTextCollector$Parameters.d.ts'
import type { TextAlignment } from '../../../../net/minecraft/client/gui/TextAlignment.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../net/minecraft/util/FormattedCharSink.d.ts'
export interface ActiveTextCollector extends Object{
    accept(x: number, y: number, text: Component): void;
    accept(x: number, y: number, text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, parameters: ActiveTextCollector$Parameters, text: Component): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, parameters: ActiveTextCollector$Parameters, text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, text: Component): void;
    accept(alignment: TextAlignment, anchorX: number, y: number, text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): void;
    acceptScrolling(message: Component, centerX: number, left: number, right: number, top: number, bottom: number): void;
    acceptScrolling(message: Component, centerX: number, left: number, right: number, top: number, bottom: number, parameters: ActiveTextCollector$Parameters): void;
    acceptScrollingWithDefaultCenter(message: Component, left: number, right: number, top: number, bottom: number): void;
    defaultParameters(): ActiveTextCollector$Parameters;
    defaultParameters(newParameters: ActiveTextCollector$Parameters): void;
    defaultScrollingHelper(message: Component, centerX: number, left: number, right: number, top: number, bottom: number, lineWidth: number, lineHeight: number, parameters: ActiveTextCollector$Parameters): void;
}