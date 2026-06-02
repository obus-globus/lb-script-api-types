import type { IntegerOption } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/IntegerOption.d.ts'
import type { ColorTheme } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { StatefulControlElement } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/StatefulControlElement.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class SliderControl$SliderControlElement extends StatefulControlElement {
    constructor(arg0: AbstractOptionList, arg1: IntegerOption, arg2: Dim2i, arg3: ColorTheme)
    readonly contentWidth: number;
    readonly option: IntegerOption;
    // private sliderHeld: boolean;
    // private thumbPosition: number;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getContentWidth(): number;
    getOption(): IntegerOption;
    getSliderX(): number;
    getSliderY(): number;
    getThumbPositionForValue(arg0: number): number;
    // private getValueForThumbPosition(): number;
    isMouseOverSlider(arg0: number, arg1: number): boolean;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseDragged(arg0: MouseButtonEvent, arg1: number, arg2: number): boolean;
    mouseReleased(arg0: MouseButtonEvent): boolean;
    setValue(arg0: number): void;
    // private setValueFromMouse(arg0: number): void;
}