import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { BookModel } from '../../../../../../../net/minecraft/client/model/object/book/BookModel.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Matrix3x2fc } from '../../../../../../../org/joml/Matrix3x2fc.d.ts'
export class GuiBookModelRenderState extends Record implements PictureInPictureRenderState {
    static IDENTITY_POSE: Matrix3x2fc;
    static getBounds(paramx0: number, paramy0: number, paramx1: number, paramy1: number, paramscissorArea: ScreenRectangle): ScreenRectangle;
    constructor(bookModel: BookModel, texture: Identifier, open: number, flip: number, x0: number, y0: number, x1: number, y1: number, scale: number, scissorArea: ScreenRectangle)
    constructor(bookModel: BookModel, texture: Identifier, open: number, flip: number, x0: number, y0: number, x1: number, y1: number, scale: number, scissorArea: ScreenRectangle, bounds: ScreenRectangle)
    // private bookModel: BookModel;
    // private bounds: ScreenRectangle;
    // private flip: number;
    // private open: number;
    // private scale: number;
    // private scissorArea: ScreenRectangle;
    // private texture: Identifier;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bookModel(): BookModel;
    bounds(): ScreenRectangle;
    equals(o: Object | null): boolean;
    flip(): number;
    hashCode(): number;
    open(): number;
    pose(): Matrix3x2fc;
    scale(): number;
    scissorArea(): ScreenRectangle;
    texture(): Identifier;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}