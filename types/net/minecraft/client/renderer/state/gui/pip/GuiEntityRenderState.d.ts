import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ScreenRectangle } from '../../../../../../../net/minecraft/client/gui/navigation/ScreenRectangle.d.ts'
import type { EntityRenderState } from '../../../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
import type { Matrix3x2f } from '../../../../../../../org/joml/Matrix3x2f.d.ts'
import type { Quaternionf } from '../../../../../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../../../../../org/joml/Vector3f.d.ts'
export class GuiEntityRenderState extends Record implements PictureInPictureRenderState {
    static IDENTITY_POSE: Matrix3x2f;
    static getBounds(paramx0: number, paramy0: number, paramx1: number, paramy1: number, paramscissorArea: ScreenRectangle): ScreenRectangle;
    // private bounds: ScreenRectangle;
    // private overrideCameraAngle: Quaternionf;
    // private renderState: EntityRenderState;
    // private rotation: Quaternionf;
    // private scale: number;
    // private scissorArea: ScreenRectangle;
    // private translation: Vector3f;
    // private x0: number;
    // private x1: number;
    // private y0: number;
    // private y1: number;
    bounds(): ScreenRectangle;
    equals(o: Object | null): boolean;
    hashCode(): number;
    overrideCameraAngle(): Quaternionf;
    pose(): Matrix3x2f;
    renderState(): EntityRenderState;
    rotation(): Quaternionf;
    scale(): number;
    scissorArea(): ScreenRectangle;
    toString(): string;
    translation(): Vector3f;
    x0(): number;
    x1(): number;
    y0(): number;
    y1(): number;
}