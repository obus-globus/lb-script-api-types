import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { GameTestBatch } from '../../../../net/minecraft/gametest/framework/GameTestBatch.d.ts'
import type { GameTestBatchFactory$TestDecorator } from '../../../../net/minecraft/gametest/framework/GameTestBatchFactory$TestDecorator.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
import type { GameTestRunner$GameTestBatcher } from '../../../../net/minecraft/gametest/framework/GameTestRunner$GameTestBatcher.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
export class GameTestBatchFactory extends Object {
    static DIRECT: (param0: Holder$Reference<GameTestInstance>, param1: ServerLevel) => java.util.stream.Stream<net.minecraft.gametest.framework.GameTestInfo>;
    static divideIntoBatches(paramallTests: E[], paramdecorator: (param0: Holder$Reference<GameTestInstance>, param1: ServerLevel) => java.util.stream.Stream<net.minecraft.gametest.framework.GameTestInfo>, paramlevel: ServerLevel): GameTestBatch[];
    static fromGameTestInfo(): GameTestRunner$GameTestBatcher;
    static fromGameTestInfo(parammaxTestsPerBatch: number): GameTestRunner$GameTestBatcher;
    static toGameTestBatch(paramtests: E[], parambatch: Holder<Object>, paramcounter: number): GameTestBatch;
    constructor()
}