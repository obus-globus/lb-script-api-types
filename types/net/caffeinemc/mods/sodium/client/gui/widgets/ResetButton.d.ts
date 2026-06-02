import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { AbstractWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class ResetButton extends AbstractWidget {
    static isShiftHeld(): boolean;
    constructor(arg0: AbstractWidget, arg1: () => void)
    // private action: () => void;
    // private parent: AbstractWidget;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    getHeight(): number;
    getX(): number;
    getY(): number;
    isActive(): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
}