import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PictureInPictureRendererRegistry$Context } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Context.d.ts'
import type { PictureInPictureRendererRegistry$Factory } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Factory.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
export class PictureInPictureRendererRegistryImpl extends Object {
    static createNewRenderer<S extends PictureInPictureRenderState>(paramarg0: S, paramarg1: Minecraft): PictureInPictureRenderer<S>;
    static getRegisteredFactoryStateClasses(): Class<PictureInPictureRenderState>[];
    static onReady(paramarg0: Minecraft, paramarg1: JavaMap<Class<PictureInPictureRenderState>, PictureInPictureRenderer<any>>): void;
    static register(paramarg0: (param0: PictureInPictureRendererRegistry$Context) => PictureInPictureRenderer<any>): void;
    private constructor()
}