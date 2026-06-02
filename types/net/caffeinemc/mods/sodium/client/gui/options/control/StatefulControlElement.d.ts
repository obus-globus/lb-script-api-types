import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { StatefulOption } from '../../../../../../../../net/caffeinemc/mods/sodium/client/config/structure/StatefulOption.d.ts'
import type { ColorTheme } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
import type { AbstractOptionList } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { ControlElement } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/ControlElement.d.ts'
import type { ResetButton } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/ResetButton.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MouseButtonEvent } from '../../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export abstract class StatefulControlElement extends ControlElement {
    constructor(arg0: AbstractOptionList, arg1: Dim2i, arg2: ColorTheme)
    // private resetButton: ResetButton;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getOption(): StatefulOption<Object>;
    isResetOverlayActive(): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    truncateLabelToFit(arg0: string): string;
}