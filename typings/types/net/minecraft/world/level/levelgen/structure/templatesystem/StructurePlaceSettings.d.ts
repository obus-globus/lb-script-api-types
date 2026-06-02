import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Mirror } from '../../../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { LiquidSettings } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/LiquidSettings.d.ts'
import type { StructureProcessor } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureProcessor.d.ts'
import type { StructureTemplate$Palette } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplate$Palette.d.ts'
export class StructurePlaceSettings extends Object {
    constructor()
    readonly boundingBox: BoundingBox;
    // private finalizeEntities: boolean;
    readonly ignoreEntities: boolean;
    readonly knownShape: boolean;
    // private liquidSettings: LiquidSettings;
    readonly mirror: Mirror;
    // private palette: number;
    readonly processors: StructureProcessor[];
    // private random: RandomSource;
    readonly rotation: Rotation;
    readonly rotationPivot: BlockPos;
    addProcessor(processor: StructureProcessor): StructurePlaceSettings;
    clearProcessors(): StructurePlaceSettings;
    copy(): StructurePlaceSettings;
    getBoundingBox(): BoundingBox;
    getKnownShape(): boolean;
    getMirror(): Mirror;
    getProcessors(): StructureProcessor[];
    getRandom(pos: BlockPos): RandomSource;
    getRandomPalette(palettes: StructureTemplate$Palette[], pos: BlockPos): StructureTemplate$Palette;
    getRotation(): Rotation;
    getRotationPivot(): BlockPos;
    isIgnoreEntities(): boolean;
    popProcessor(processor: StructureProcessor): StructurePlaceSettings;
    setBoundingBox(boundingBox: BoundingBox): StructurePlaceSettings;
    setFinalizeEntities(finalizeEntities: boolean): StructurePlaceSettings;
    setIgnoreEntities(ignoreEntities: boolean): StructurePlaceSettings;
    setKnownShape(knownShape: boolean): StructurePlaceSettings;
    setLiquidSettings(liquidSettings: LiquidSettings): StructurePlaceSettings;
    setMirror(mirror: Mirror): StructurePlaceSettings;
    setRandom(random: RandomSource): StructurePlaceSettings;
    setRotation(rotation: Rotation): StructurePlaceSettings;
    setRotationPivot(rotationPivot: BlockPos): StructurePlaceSettings;
    shouldApplyWaterlogging(): boolean;
    shouldFinalizeEntities(): boolean;
}