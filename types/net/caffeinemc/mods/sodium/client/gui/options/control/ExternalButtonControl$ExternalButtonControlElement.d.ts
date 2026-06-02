import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { ExternalButtonOption } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ExternalButtonOption.d.ts'
import type { Option } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { ColorTheme } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { ControlElement } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/ControlElement.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Screen } from '../../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { KeyEvent } from '../../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class ExternalButtonControl$ExternalButtonControlElement extends ControlElement {
    constructor(arg0: Screen, arg1: AbstractOptionList, arg2: Dim2i, arg3: ExternalButtonOption, arg4: (param0: Screen) => void, arg5: ColorTheme)
    // private currentScreenConsumer: (param0: Screen) => void;
    readonly option: ExternalButtonOption;
    // private screen: Screen;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getOption(): Option;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    // private openScreen(arg0: Screen): void;
}