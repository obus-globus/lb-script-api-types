import type { Method } from '../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GameTestHelper } from '../../../../../../net/minecraft/gametest/framework/GameTestHelper.d.ts'
export interface CustomTestMethodInvoker extends Object{
    invokeTestMethod(arg0: GameTestHelper, arg1: Method): void;
}