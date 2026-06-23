import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../net/minecraft/core/Vec3i.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Rotation } from '../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { TestInstanceBlockEntity } from '../../../../net/minecraft/world/level/block/entity/TestInstanceBlockEntity.d.ts'
import type { BoundingBox } from '../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class StructureUtils extends Object {
    static DEFAULT_Y_SEARCH_RADIUS: number;
    static testStructuresSourceDir: Path[][];
    static testStructuresTargetDir: Path[][];
    static clearSpaceForStructure(paramstructureBoundingBox: BoundingBox, paramlevel: ServerLevel): void;
    static createNewEmptyTest(paramid: Identifier, paramstructurePos: BlockPos, paramsize: Vec3i, paramrotation: Rotation, paramlevel: ServerLevel): TestInstanceBlockEntity;
    static findNearestTest(paramrelativeToPos: BlockPos, paramsearchRadius: number, paramlevel: ServerLevel): Optional<BlockPos>;
    static findTestBlocks(paramcenterPos: BlockPos, paramsearchRadius: number, paramlevel: ServerLevel): Stream<BlockPos>;
    static findTestContainingPos(parampos: BlockPos, paramsearchRadius: number, paramlevel: ServerLevel): Optional<BlockPos>;
    static getRotationForRotationSteps(paramrotationSteps: number): Rotation;
    static getRotationStepsForRotation(paramrotation: Rotation): number;
    static getStructureBoundingBox(paramnorthWestCorner: BlockPos, paramsize: Vec3i, paramrotation: Rotation): BoundingBox;
    static getTransformedFarCorner(paramstructurePosition: BlockPos, paramsize: Vec3i, paramrotation: Rotation): BlockPos;
    static lookedAtTestPos(parampos: BlockPos, paramcamera: Entity, paramlevel: ServerLevel): Stream<BlockPos>;
    constructor()
}