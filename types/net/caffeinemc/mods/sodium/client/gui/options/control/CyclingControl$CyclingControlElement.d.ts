import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { EnumOption } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/EnumOption.d.ts'
import type { ColorTheme } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { StatefulControlElement } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/StatefulControlElement.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { KeyEvent } from '../../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class CyclingControl$CyclingControlElement<T extends Enum<T>> extends StatefulControlElement {
    constructor(arg0: AbstractOptionList, arg1: EnumOption<T>, arg2: Dim2i, arg3: ColorTheme)
    // private baseValues: T[];
    readonly option: EnumOption<T>;
    // private cycleControl(arg0: boolean): void;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getOption(): EnumOption<T>;
    keyPressed(arg0: KeyEvent): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
}