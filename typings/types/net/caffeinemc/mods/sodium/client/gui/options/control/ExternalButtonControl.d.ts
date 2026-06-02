import type { Consumer } from '../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ExternalButtonOption } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/ExternalButtonOption.d.ts'
import type { Option } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/Option.d.ts'
import type { ColorTheme } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { Control } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/Control.d.ts'
import type { ControlElement } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/ControlElement.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { Screen } from '../../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Component } from '../../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ExternalButtonControl extends Object implements Control {
    static BASE_BUTTON_TEXT: Component;
    static EXTERNAL_PAGE_PREFIX: string;
    static formatExternalButtonText(paramarg0: boolean, paramarg1: ColorTheme): Component;
    constructor(arg0: ExternalButtonOption, arg1: (param0: Screen) => void)
    // private currentScreenConsumer: (param0: Screen) => void;
    readonly option: ExternalButtonOption;
    createElement(arg0: Screen, arg1: AbstractOptionList, arg2: Dim2i, arg3: ColorTheme): ControlElement;
    getMaxWidth(): number;
    getOption(): Option;
}