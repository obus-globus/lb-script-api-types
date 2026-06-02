import type { VertexConsumer } from '../../../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VertexBufferWriter } from '../../../../../../../net/caffeinemc/mods/sodium/api/vertex/buffer/VertexBufferWriter.d.ts'
import type { MutableQuadViewImpl } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/model/MutableQuadViewImpl.d.ts'
import type { Matrix3f } from '../../../../../../../org/joml/Matrix3f.d.ts'
import type { Matrix4f } from '../../../../../../../org/joml/Matrix4f.d.ts'
export class QuadEncoder extends Object {
    static writeQuadVertices(paramarg0: MutableQuadViewImpl, paramarg1: VertexConsumer, paramarg2: number, paramarg3: Matrix4f, paramarg4: boolean, paramarg5: Matrix3f): void;
    static writeQuadVertices(paramarg0: MutableQuadViewImpl, paramarg1: VertexBufferWriter, paramarg2: number, paramarg3: Matrix4f, paramarg4: boolean, paramarg5: Matrix3f): void;
    constructor()
}