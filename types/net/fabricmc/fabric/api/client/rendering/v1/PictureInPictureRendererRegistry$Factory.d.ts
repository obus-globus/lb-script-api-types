import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PictureInPictureRendererRegistry$Context } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Context.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
export interface PictureInPictureRendererRegistry$Factory extends Object{
    createRenderer(arg0: PictureInPictureRendererRegistry$Context): PictureInPictureRenderer<Object>;
}