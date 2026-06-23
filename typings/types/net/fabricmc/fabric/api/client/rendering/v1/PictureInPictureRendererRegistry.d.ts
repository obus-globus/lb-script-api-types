import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { PictureInPictureRendererRegistry$Context } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Context.d.ts'
import type { PictureInPictureRendererRegistry$Factory } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Factory.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
export class PictureInPictureRendererRegistry extends Object {
    static register(paramarg0: (param0: PictureInPictureRendererRegistry$Context) => PictureInPictureRenderer<any>): void;
    constructor()
}