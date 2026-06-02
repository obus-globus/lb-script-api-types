import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { VertexConsumer } from '../../../../../com/mojang/blaze3d/vertex/VertexConsumer.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelPartAccessor } from '../../../../../net/fabricmc/fabric/mixin/client/rendering/ModelPartAccessor.d.ts'
import type { ModelPart$Cube } from '../../../../../net/minecraft/client/model/geom/ModelPart$Cube.d.ts'
import type { ModelPart$Visitor } from '../../../../../net/minecraft/client/model/geom/ModelPart$Visitor.d.ts'
import type { PartPose } from '../../../../../net/minecraft/client/model/geom/PartPose.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Quaternionf } from '../../../../../org/joml/Quaternionf.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../org/joml/Vector3fc.d.ts'
export class ModelPart extends Object implements ModelPartAccessor {
    static DEFAULT_SCALE: number;
    constructor(cubes: ModelPart$Cube[], children: { [key: string]: ModelPart })
    // private children: { [key: string]: ModelPart };
    // private cubes: ModelPart$Cube[];
    readonly initialPose: PartPose;
    skipDraw: boolean;
    visible: boolean;
    x: number;
    xRot: number;
    xScale: number;
    y: number;
    yRot: number;
    yScale: number;
    z: number;
    zRot: number;
    zScale: number;
    // private addAllChildren(output: (param0: string, param1: ModelPart) => void): void;
    // private compile(pose: PoseStack$Pose, builder: VertexConsumer, lightCoords: number, overlayCoords: number, color: number): void;
    createPartLookup(): (param0: string) => ModelPart;
    getAllParts(): ModelPart[];
    getChild(name: string): ModelPart;
    getExtentsForGui(poseStack: PoseStack, output: (param0: Vector3fc) => void): void;
    getInitialPose(): PartPose;
    getRandomCube(random: RandomSource): ModelPart$Cube;
    hasChild(name: string): boolean;
    isEmpty(): boolean;
    loadPose(pose: PartPose): void;
    offsetPos(offset: Vector3f): void;
    offsetRotation(offset: Vector3f): void;
    offsetScale(offset: Vector3f): void;
    render(poseStack: PoseStack, buffer: VertexConsumer, lightCoords: number, overlayCoords: number): void;
    render(poseStack: PoseStack, buffer: VertexConsumer, lightCoords: number, overlayCoords: number, color: number): void;
    resetPose(): void;
    rotateBy(rotation: Quaternionf): void;
    setInitialPose(initialPose: PartPose): void;
    setPos(x: number, y: number, z: number): void;
    setRotation(xRot: number, yRot: number, zRot: number): void;
    storePose(): PartPose;
    translateAndRotate(arg0: PoseStack): void;
    visit(poseStack: PoseStack, visitor: (param0: PoseStack$Pose, param1: string, param2: number, param3: ModelPart$Cube) => void): void;
    // private visit(poseStack: PoseStack, visitor: (param0: PoseStack$Pose, param1: string, param2: number, param3: ModelPart$Cube) => void, path: string): void;
}