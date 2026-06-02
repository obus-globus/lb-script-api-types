import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiElementRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiElementRenderState.d.ts'
import type { GuiItemRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiItemRenderState.d.ts'
import type { GuiTextRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/GuiTextRenderState.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
export class GuiRenderState$Node extends Object {
    private constructor(parent: GuiRenderState$Node)
    elementStates: GuiElementRenderState[];
    glyphStates: GuiElementRenderState[];
    itemStates: GuiItemRenderState[];
    parent: GuiRenderState$Node;
    picturesInPictureStates: PictureInPictureRenderState[];
    textStates: GuiTextRenderState[];
    up: GuiRenderState$Node;
    addGlyph(glyphState: GuiElementRenderState): void;
    addGuiElement(blitState: GuiElementRenderState): void;
    addItem(itemState: GuiItemRenderState): void;
    addPicturesInPictureState(picturesInPictureState: PictureInPictureRenderState): void;
    addText(textState: GuiTextRenderState): void;
}