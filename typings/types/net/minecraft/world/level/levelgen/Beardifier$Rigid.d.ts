import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BoundingBox } from '../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
import type { TerrainAdjustment } from '../../../../../net/minecraft/world/level/levelgen/structure/TerrainAdjustment.d.ts'
export class Beardifier$Rigid extends Record {
    // private box: BoundingBox;
    // private groundLevelDelta: number;
    // private terrainAdjustment: TerrainAdjustment;
    box(): BoundingBox;
    equals(o: Object | null): boolean;
    groundLevelDelta(): number;
    hashCode(): number;
    terrainAdjustment(): TerrainAdjustment;
    toString(): string;
}