import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { GameTestInstance } from '../../../../net/minecraft/gametest/framework/GameTestInstance.d.ts'
export interface TestInstanceFinder extends Object{
    findTests(): Stream<Holder$Reference<GameTestInstance>>;
}