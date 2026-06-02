import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PictureInPictureRendererRegistry$Context } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Context.d.ts'
import type { PictureInPictureRendererRegistry$Factory } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Factory.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
export class PictureInPictureRendererRegistryImpl extends Object {
    static createNewRenderer(paramarg0: Object | null, paramarg1: Minecraft, paramarg2: MultiBufferSource$BufferSource, paramarg3: SubmitNodeCollector): PictureInPictureRenderer<Object>;
    static getRegisteredFactoryStateClasses(): E[];
    static onReady(paramarg0: Minecraft, paramarg1: MultiBufferSource$BufferSource, paramarg2: SubmitNodeCollector, paramarg3: Map<Object | null, Object | null>): void;
    static register(paramarg0: (param0: PictureInPictureRendererRegistry$Context) => net.minecraft.client.gui.render.pip.PictureInPictureRenderer<unknown>): void;
    private constructor()
}