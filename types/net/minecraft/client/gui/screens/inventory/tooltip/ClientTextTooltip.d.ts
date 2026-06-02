import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ClientTooltipComponent } from '../../../../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipComponent.d.ts'
import type { Style } from '../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { TooltipComponent } from '../../../../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
export class ClientTextTooltip extends Object implements ClientTooltipComponent {
    static create(paramcharSequence: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean): ClientTooltipComponent;
    static create(paramcomponent: TooltipComponent): ClientTooltipComponent;
    constructor(text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean)
    // private text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    extractImage(font: Font, x: number, y: number, w: number, h: number, graphics: GuiGraphicsExtractor): void;
    extractText(graphics: GuiGraphicsExtractor, font: Font, x: number, y: number): void;
    extractText(graphics: GuiGraphicsExtractor, font: Font, x: number, y: number): void;
    getHeight(font: Font): number;
    getWidth(font: Font): number;
    showTooltipWithItemInHand(): boolean;
}