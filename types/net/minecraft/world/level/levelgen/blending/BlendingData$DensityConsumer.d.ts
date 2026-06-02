import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BlendingData$DensityConsumer extends Object{
    consume(cellX: number, cellY: number, cellZ: number, density: number): void;
}