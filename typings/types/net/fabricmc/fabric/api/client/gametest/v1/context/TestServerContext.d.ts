import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { FailableConsumer } from '../../../../../../../../org/apache/commons/lang3/function/FailableConsumer.d.ts'
import type { FailableFunction } from '../../../../../../../../org/apache/commons/lang3/function/FailableFunction.d.ts'
export interface TestServerContext extends Object {
    computeOnServer<T extends Object | number | string | boolean>(arg0: (param0: MinecraftServer) => E): T;
    runCommand(arg0: string): void;
    runOnServer(arg0: (param0: MinecraftServer) => void): void;
}