import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { PictureInPictureRenderer } from '../../../../../../net/minecraft/client/gui/render/pip/PictureInPictureRenderer.d.ts'
import type { PictureInPictureRenderState } from '../../../../../../net/minecraft/client/renderer/state/gui/pip/PictureInPictureRenderState.d.ts'
export class PictureInPictureRendererPool<T extends PictureInPictureRenderState> extends Object implements AutoCloseable {
    constructor()
    // private index: number;
    // private renderers: PictureInPictureRenderer<T>[];
    cleanUpUnusedRenderers(): void;
    close(): void;
    newFrame(): void;
    substitute(arg0: PictureInPictureRenderer<T>, arg1: T, arg2: Minecraft): PictureInPictureRenderer<T>;
}