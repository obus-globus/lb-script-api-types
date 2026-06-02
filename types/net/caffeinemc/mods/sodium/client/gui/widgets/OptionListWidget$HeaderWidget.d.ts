import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { AbstractOptionList } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/AbstractOptionList.d.ts'
import type { AbstractWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { ResetButton } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/ResetButton.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export abstract class OptionListWidget$HeaderWidget extends AbstractWidget {
    constructor(arg0: AbstractOptionList, arg1: Dim2i, arg2: string, arg3: number, arg4: number, arg5: () => void)
    // private backgroundColor: number;
    // private list: AbstractOptionList;
    // private resetButton: ResetButton;
    // private textColor: number;
    // private title: string;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getY(): number;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    rightReservedWidth(): number;
    truncateLabelToFit(arg0: string, arg1: number): string;
}