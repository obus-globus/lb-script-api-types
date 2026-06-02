import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VertexMultiConsumer extends Object {
    static create(): VertexConsumer;
    static create(paramconsumer: VertexConsumer): VertexConsumer;
    static create(paramfirst: VertexConsumer, paramsecond: VertexConsumer): VertexConsumer;
    static create(paramconsumers: (Object | null)[]): VertexConsumer;
    constructor()
}