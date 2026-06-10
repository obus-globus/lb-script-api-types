import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
import type { GameTestBatchFactory$TestDecorator } from '../../../../net/minecraft/gametest/framework/GameTestBatchFactory$TestDecorator.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { GameTestRunner$GameTestBatcher } from '../../../../net/minecraft/gametest/framework/GameTestRunner$GameTestBatcher.d.ts'
import type { TestEnvironmentDefinition } from '../../../../net/minecraft/gametest/framework/TestEnvironmentDefinition.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class GameTestBatchFactory extends Object {
    static DIRECT: (param0: Holder$Reference<GameTestInstance>, param1: ServerLevel) => Stream<GameTestInfo>;
    static divideIntoBatches(paramallTests: Holder$Reference<GameTestInstance>[], paramdecorator: (param0: Holder$Reference<GameTestInstance>, param1: ServerLevel) => Stream<GameTestInfo>, paramlevel: ServerLevel): GameTestBatch[];
    static fromGameTestInfo(): GameTestRunner$GameTestBatcher;
    static fromGameTestInfo(parammaxTestsPerBatch: number): GameTestRunner$GameTestBatcher;
    static toGameTestBatch(paramtests: GameTestInfo[], parambatch: Holder<TestEnvironmentDefinition<Object>>, paramcounter: number): GameTestBatch;
    constructor()
}