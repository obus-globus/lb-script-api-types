import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollector } from '../../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
export interface PictureInPictureRendererRegistry$Context extends Object{
    bufferSource(): MultiBufferSource$BufferSource;
    minecraft(): Minecraft;
    submitNodeCollector(): SubmitNodeCollector;
}