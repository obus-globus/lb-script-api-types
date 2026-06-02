import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlendingData } from '../../../../../../net/minecraft/world/level/levelgen/blending/BlendingData.d.ts'
export interface Blender$CellValueGetter extends Object{
    get(data: BlendingData, cellX: number, cellY: number, cellZ: number): number;
}