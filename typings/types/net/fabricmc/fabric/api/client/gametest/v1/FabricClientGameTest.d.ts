import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientGameTestContext } from '../../../../../../../net/fabricmc/fabric/api/client/gametest/v1/context/ClientGameTestContext.d.ts'
export interface FabricClientGameTest extends Object{
    runTest(arg0: ClientGameTestContext): void;
}