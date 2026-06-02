import type { PoseStack } from '../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { VertexConsumer } from '../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ShapeRenderer extends Object {
    static renderShape(paramposeStack: PoseStack, parambuilder: VertexConsumer, paramshape: VoxelShape, paramx: number, paramy: number, paramz: number, paramcolor: number, paramwidth: number): void;
    constructor()
}