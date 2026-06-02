import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LevelChunkTicks } from '../../../../net/minecraft/world/ticks/LevelChunkTicks.d.ts'
export interface LevelTicks$PosAndContainerConsumer<T extends Object | number | string | boolean> extends Object{
    accept(pos: number, container: LevelChunkTicks<T>): void;
}