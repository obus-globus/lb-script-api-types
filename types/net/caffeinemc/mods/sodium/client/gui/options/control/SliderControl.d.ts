import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { IntegerOption } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/IntegerOption.d.ts'
import type { StatefulOption } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StatefulOption.d.ts'
import type { ColorTheme } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { Control } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/Control.d.ts'
import type { ControlElement } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/ControlElement.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { Screen } from '../../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
export class SliderControl extends Object implements Control {
    constructor(arg0: IntegerOption)
    readonly option: IntegerOption;
    createElement(arg0: Screen, arg1: AbstractOptionList, arg2: Dim2i, arg3: ColorTheme): ControlElement;
    getMaxWidth(): number;
    getOption(): StatefulOption<number>;
}