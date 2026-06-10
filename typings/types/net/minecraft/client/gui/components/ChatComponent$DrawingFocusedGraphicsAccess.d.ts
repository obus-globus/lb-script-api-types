import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ActiveTextCollector } from '../../../../../net/minecraft/client/gui/ActiveTextCollector.d.ts'
import type { ActiveTextCollector$Parameters } from '../../../../../net/minecraft/client/gui/ActiveTextCollector$Parameters.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ChatComponent$ChatGraphicsAccess } from '../../../../../net/minecraft/client/gui/components/ChatComponent$ChatGraphicsAccess.d.ts'
import type { GuiMessageTag } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag.d.ts'
import type { GuiMessageTag$Icon } from '../../../../../net/minecraft/client/multiplayer/chat/GuiMessageTag$Icon.d.ts'
import type { Style } from '../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Matrix3x2f } from '../../../../../org/joml/Matrix3x2f.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
export class ChatComponent$DrawingFocusedGraphicsAccess extends Object implements Consumer<Style>, ChatComponent$ChatGraphicsAccess {
    constructor(graphics: GuiGraphicsExtractor, font: Font, mouseX: number, mouseY: number, changeCursorOnInsertions: boolean)
    // private changeCursorOnInsertions: boolean;
    // private font: Font;
    // private globalMouseX: number;
    // private globalMouseY: number;
    // private graphics: GuiGraphicsExtractor;
    // private hoveredStyle: Style;
    // private localMousePos: Vector2f;
    // private parameters: ActiveTextCollector$Parameters;
    // private textRenderer: ActiveTextCollector;
    accept(style: Style): void;
    andThen(arg0: (param0: Style) => void): (param0: Style) => void;
    fill(x0: number, y0: number, x1: number, y1: number, color: number): void;
    handleMessage(textTop: number, opacity: number, message: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean): boolean;
    handleTag(x0: number, y0: number, x1: number, y1: number, opacity: number, tag: GuiMessageTag): void;
    handleTagIcon(left: number, bottom: number, forceVisible: boolean, tag: GuiMessageTag, icon: GuiMessageTag$Icon): void;
    // private isMouseOver(left: number, top: number, right: number, bottom: number): boolean;
    // private showTooltip(tag: GuiMessageTag): void;
    // private updateLocalMousePos(): void;
    updatePose(updater: (param0: Matrix3x2f) => void): void;
}