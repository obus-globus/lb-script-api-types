import type { VertexConsumer } from '../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiBufferSource } from '../../../../../../net/minecraft/client/renderer/MultiBufferSource.d.ts'
import type { RenderType } from '../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { SpriteGetter } from '../../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class SpriteId extends Record {
    constructor(atlasLocation: Identifier, texture: Identifier)
    // private atlasLocation: Identifier;
    // private texture: Identifier;
    atlasLocation(): Identifier;
    buffer(sprites: SpriteGetter, bufferSource: MultiBufferSource, renderType: (param0: Identifier) => RenderType): VertexConsumer;
    buffer(sprites: SpriteGetter, bufferSource: MultiBufferSource, renderType: (param0: Identifier) => RenderType, sheeted: boolean, hasFoil: boolean): VertexConsumer;
    equals(o: Object | null): boolean;
    hashCode(): number;
    renderType(renderType: (param0: Identifier) => RenderType): RenderType;
    texture(): Identifier;
    toString(): string;
}