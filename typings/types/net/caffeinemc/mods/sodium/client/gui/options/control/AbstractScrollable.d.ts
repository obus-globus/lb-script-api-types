import type { AbstractParentWidget } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/AbstractParentWidget.d.ts'
import type { ScrollbarWidget } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/ScrollbarWidget.d.ts'
import type { Dim2i } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
export abstract class AbstractScrollable extends AbstractParentWidget {
    constructor(arg0: Dim2i)
    // private scrollbar: ScrollbarWidget;
    getScrollAmount(): number;
    mouseScrolled(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
}