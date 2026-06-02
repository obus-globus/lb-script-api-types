import type { IntConsumer } from '../../../../../../../java/util/function/IntConsumer.d.ts'
import type { AbstractWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { ComponentPath } from '../../../../../../../net/minecraft/client/gui/ComponentPath.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarrationElementOutput } from '../../../../../../../net/minecraft/client/gui/narration/NarrationElementOutput.d.ts'
import type { FocusNavigationEvent } from '../../../../../../../net/minecraft/client/gui/navigation/FocusNavigationEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
export class ScrollbarWidget extends AbstractWidget {
    constructor(arg0: Dim2i, arg1: (param0: number) => void)
    constructor(arg0: Dim2i, arg1: boolean, arg2: boolean)
    constructor(arg0: Dim2i, arg1: boolean, arg2: boolean, arg3: (param0: number) => void)
    // private alwaysShow: boolean;
    // private dragging: boolean;
    // private horizontal: boolean;
    // private lastScrollTime: number;
    // private onScrollChange: (param0: number) => void;
    readonly scrollAmount: number;
    // private total: number;
    // private visible: number;
    canScroll(): boolean;
    extractRenderState(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: number): void;
    // private getHighlightLength(arg0: number): number;
    // private getHighlightStart(arg0: number): number;
    getScrollAmount(): number;
    // private isMouseOverHighlight(arg0: number, arg1: number): boolean;
    mouseClicked(arg0: MouseButtonEvent, arg1: boolean): boolean;
    mouseDragged(arg0: MouseButtonEvent, arg1: number, arg2: number): boolean;
    mouseReleased(arg0: MouseButtonEvent): boolean;
    nextFocusPath(arg0: FocusNavigationEvent): ComponentPath;
    scroll(arg0: number): void;
    scrollTo(arg0: number): void;
    // private setScrollAndNotify(arg0: number): boolean;
    setScrollbarContext(arg0: number): void;
    setScrollbarContext(arg0: number, arg1: number): void;
    updateNarration(arg0: NarrationElementOutput): void;
}