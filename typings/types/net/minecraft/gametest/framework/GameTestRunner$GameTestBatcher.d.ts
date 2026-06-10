import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
export interface GameTestRunner$GameTestBatcher extends Object{
    batch(infos: GameTestInfo[]): GameTestBatch[];
}