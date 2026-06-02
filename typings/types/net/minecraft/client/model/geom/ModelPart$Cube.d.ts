import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelCuboid } from '../../../../../net/caffeinemc/mods/sodium/client/render/immediate/model/ModelCuboid.d.ts'
import type { ModelPart$Polygon } from '../../../../../net/minecraft/client/model/geom/ModelPart$Polygon.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
export class ModelPart$Cube extends Object {
    constructor(xTexOffs: number, yTexOffs: number, minX: number, minY: number, minZ: number, width: number, height: number, depth: number, growX: number, growY: number, growZ: number, mirror: boolean, xTexSize: number, yTexSize: number, visibleFaces: Direction[])
    maxX: number;
    maxY: number;
    maxZ: number;
    minX: number;
    minY: number;
    minZ: number;
    polygons: ModelPart$Polygon[];
    // private sodium$cuboid: ModelCuboid;
    compile(pose: PoseStack$Pose, builder: VertexConsumer, lightCoords: number, overlayCoords: number, color: number): void;
}