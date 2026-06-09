import type { IntConsumer } from '../../../../java/util/function/IntConsumer.d.ts'
import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface ChunkHolder$LevelChangeListener extends Object {
    onLevelChange(pos: ChunkPos, oldLevel: () => kotlin.Int, newLevel: number, setQueueLevel: (param0: number) => void): void;
}