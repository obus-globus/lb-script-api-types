import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource$BufferSource } from '../../../../../net/minecraft/client/renderer/MultiBufferSource$BufferSource.d.ts'
import type { SubmitNodeCollection } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollection.d.ts'
export class CustomFeatureRenderer extends Object {
    constructor()
    renderSolid(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource): void;
    renderTranslucent(nodeCollection: SubmitNodeCollection, bufferSource: MultiBufferSource$BufferSource): void;
}