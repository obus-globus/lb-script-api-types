import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ControlElement } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/options/control/ControlElement.d.ts'
import type { ScrollableTooltip$TooltipParent } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/ScrollableTooltip$TooltipParent.d.ts'
import type { ScrollbarWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/ScrollbarWidget.d.ts'
import type { Dim2i } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/Dim2i.d.ts'
import type { Font } from '../../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Style } from '../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Vector2i } from '../../../../../../../org/joml/Vector2i.d.ts'
export class ScrollableTooltip extends Object {
    constructor(arg0: ScrollableTooltip$TooltipParent)
    // private content: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
    // private contentSize: Vector2i;
    // private font: Font;
    // private hoveredElement: ControlElement;
    // private overlayMode: boolean;
    // private parent: ScrollableTooltip$TooltipParent;
    // private reservedArea: Vector2i;
    // private scrollbar: ScrollbarWidget;
    readonly tooltipArea: Dim2i;
    // private visibleDim: Dim2i;
    // private generateTooltipContent(arg0: number, arg1: boolean): number;
    // private getLineHeight(): number;
    mouseScrolled(arg0: number, arg1: number, arg2: number): boolean;
    onControlHover(arg0: ControlElement, arg1: number, arg2: number): void;
    // private positionTooltip(arg0: boolean): boolean;
    render(arg0: GuiGraphicsExtractor): void;
    setReservedAreaTopLeftCorner(arg0: number, arg1: number): void;
    setTooltipArea(arg0: Dim2i): void;
}