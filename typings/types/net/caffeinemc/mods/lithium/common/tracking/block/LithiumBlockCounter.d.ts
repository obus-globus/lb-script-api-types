import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { PalettedContainer$CountConsumer } from '../../../../../../../net/minecraft/world/level/chunk/PalettedContainer$CountConsumer.d.ts'
export interface LithiumBlockCounter extends Object, PalettedContainer$CountConsumer<BlockState>{
    lithium$initBlockCounter(arg0: number[]): void;
}