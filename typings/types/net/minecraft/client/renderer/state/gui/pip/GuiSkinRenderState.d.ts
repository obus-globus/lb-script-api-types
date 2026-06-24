import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { Model$Simple } from '../../../../../../../net/minecraft/client/model/Model$Simple.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Matrix3x2fc } from '../../../../../../../org/joml/Matrix3x2fc.d.ts'
export class GuiSkinRenderState extends Record implements PictureInPictureRenderState {
    static IDENTITY_POSE: Matrix3x2fc;
    static getBounds(paramx0: number, paramy0: number, paramx1: number, paramy1: number, paramscissorArea: ScreenRectangle): ScreenRectangle;
    constructor(playerModel: Model$Simple, texture: Identifier, rotationX: number, rotationY: number, pivotY: number, x0: number, y0: number, x1: number, y1: number, scale: number, scissorArea: ScreenRectangle)
    constructor(playerModel: Model$Simple, texture: Identifier, rotationX: number, rotationY: number, pivotY: number, x0: number, y0: number, x1: number, y1: number, scale: number, scissorArea: ScreenRectangle, bounds: ScreenRectangle)
    // private bounds: ScreenRectangle;
    // private pivotY: number;
    // private playerModel: Model$Simple;
    // private rotationX: number;
    // private rotationY: number;
    // private scale: number;
    // private scissorArea: ScreenRectangle;
    // private texture: Identifier;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bounds(): ScreenRectangle;
    equals(o: Object | null): boolean;
    hashCode(): number;
    pivotY(): number;
    playerModel(): Model$Simple;
    pose(): Matrix3x2fc;
    rotationX(): number;
    rotationY(): number;
    scale(): number;
    scissorArea(): ScreenRectangle;
    texture(): Identifier;
    toString(): string;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}