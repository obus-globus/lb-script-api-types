import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CarvingContext } from '../../../../../../net/minecraft/world/level/levelgen/carver/CarvingContext.d.ts'
export interface WorldCarver$CarveSkipChecker extends Object{
    shouldSkip(context: CarvingContext, xd: number, yd: number, zd: number, y: number): boolean;
}