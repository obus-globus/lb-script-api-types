import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../../java/lang/Throwable.d.ts'
import type { MinecraftServer } from '../../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { FailableConsumer } from '../../../../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableFunction } from '../../../../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
export interface TestServerContext extends Object {
    computeOnServer<T extends Object | number | string | boolean, E extends Throwable>(arg0: (param0: MinecraftServer) => T): T;
    runCommand(arg0: string): void;
    runOnServer<E extends Throwable>(arg0: (param0: MinecraftServer) => void): void;
}