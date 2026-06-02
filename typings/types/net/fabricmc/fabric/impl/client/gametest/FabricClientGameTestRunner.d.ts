import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricClientGameTest } from '../../../../../../net/fabricmc/fabric/api/client/gametest/v1/FabricClientGameTest.d.ts'
import type { EntrypointContainer } from '../../../../../../net/fabricmc/loader/api/entrypoint/EntrypointContainer.d.ts'
export class FabricClientGameTestRunner extends Object {
    static currentlyRunningGameTest: EntrypointContainer<FabricClientGameTest>;
    static start(): void;
    constructor()
}