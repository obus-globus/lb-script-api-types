import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TVMCI$Test<C extends Closeable, T extends CallTarget> extends Object {
    constructor()
    createTestCallTarget(testContext: C, testNode: RootNode): T;
    createTestContext(testName: string): C;
    finishWarmup(testContext: C, callTarget: T): void;
}