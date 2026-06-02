import type { AbstractElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/AbstractElementWidget.d.ts'
import type { StringElementWidget } from '../../../../../../net/irisshaders/iris/gui/element/widget/StringElementWidget.d.ts'
import type { OptionMenuElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuElement.d.ts'
import type { OptionMenuStringOptionElement } from '../../../../../../net/irisshaders/iris/shaderpack/option/menu/OptionMenuStringOptionElement.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class SliderElementWidget extends StringElementWidget {
    static EMPTY: AbstractElementWidget<OptionMenuElement>;
    constructor(arg0: OptionMenuStringOptionElement)
    // private mouseDown: boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseReleased(arg0: MouseButtonEvent): boolean;
    // private onReleased(): void;
    render(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
    // private renderSlider(arg0: GuiGraphicsExtractor): void;
    // private whileDragging(arg0: number): void;
}