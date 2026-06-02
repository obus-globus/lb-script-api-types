import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { Font$PreparedText } from '../../../../../../net/minecraft/client/gui/Font$PreparedText.d.ts'
import type { ScreenRectangle } from '../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { ScreenArea } from '../../../../../../net/minecraft/client/renderer/state/gui/ScreenArea.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Matrix3x2fc } from '../../../../../../org/joml/Matrix3x2fc.d.ts'
export class GuiTextRenderState extends Object implements ScreenArea {
    constructor(font: Font, text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean, pose: Matrix3x2fc, x: number, y: number, color: number, backgroundColor: number, dropShadow: boolean, includeEmpty: boolean, scissor: ScreenRectangle)
    backgroundColor: number;
    // private bounds: ScreenRectangle;
    color: number;
    dropShadow: boolean;
    font: Font;
    // private includeEmpty: boolean;
    pose: Matrix3x2fc;
    // private preparedText: Font$PreparedText;
    scissor: ScreenRectangle;
    text: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean;
    x: number;
    y: number;
    bounds(): ScreenRectangle;
    ensurePrepared(): Font$PreparedText;
}