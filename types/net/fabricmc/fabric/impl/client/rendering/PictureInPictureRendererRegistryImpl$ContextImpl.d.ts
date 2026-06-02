import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PictureInPictureRendererRegistry$Context } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/PictureInPictureRendererRegistry$Context.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
export class PictureInPictureRendererRegistryImpl$ContextImpl extends Record implements PictureInPictureRendererRegistry$Context {
    constructor(minecraft: Minecraft, bufferSource: MultiBufferSource$BufferSource, submitNodeCollector: SubmitNodeCollector)
    // private bufferSource: MultiBufferSource$BufferSource;
    // private minecraft: Minecraft;
    // private submitNodeCollector: SubmitNodeCollector;
    bufferSource(): MultiBufferSource$BufferSource;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    minecraft(): Minecraft;
    submitNodeCollector(): SubmitNodeCollector;
    toString(): string;
}