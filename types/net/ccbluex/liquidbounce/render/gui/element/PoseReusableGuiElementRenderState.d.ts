import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiElementRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { Matrix3x2f } from '../../../../../../org/joml/Matrix3x2f.d.ts'
export interface PoseReusableGuiElementRenderState extends Object, GuiElementRenderState{
    pose(): Matrix3x2f;
}