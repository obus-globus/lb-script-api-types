import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ClientTooltipComponent } from '../../../../../../net/minecraft/client/gui/screens/inventory/tooltip/ClientTooltipComponent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { TooltipComponent } from '../../../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
export class PackTooltipComponent extends Record implements ClientTooltipComponent, TooltipComponent {
    static create(paramcharSequence: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): ClientTooltipComponent;
    static create(paramcomponent: TooltipComponent): ClientTooltipComponent;
    constructor(name: Optional<Component>, description: Optional<(param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[]>)
    // private description: Optional<(param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[]>;
    // private name: Optional<Component>;
    description(): Optional<(param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[]>;
    equals(arg0: Object | null): boolean;
    extractImage(arg0: Font, arg1: number, arg2: number, arg3: number, arg4: number, arg5: GuiGraphicsExtractor): void;
    extractImage(font: Font, x: number, y: number, w: number, h: number, graphics: GuiGraphicsExtractor): void;
    extractText(arg0: GuiGraphicsExtractor, arg1: Font, arg2: number, arg3: number): void;
    extractText(graphics: GuiGraphicsExtractor, font: Font, x: number, y: number): void;
    getHeight(arg0: Font): number;
    getWidth(arg0: Font): number;
    hashCode(): number;
    name(): Optional<Component>;
    showTooltipWithItemInHand(): boolean;
    toString(): string;
}