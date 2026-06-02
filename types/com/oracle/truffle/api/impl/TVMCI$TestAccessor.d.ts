import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TVMCI$Test } from '../../../../../com/oracle/truffle/api/impl/TVMCI$Test.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Closeable } from '../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TVMCI$TestAccessor<C extends Closeable, T extends CallTarget> extends Object {
    constructor(testTvmci: TVMCI$Test<C, T>)
    // private testTvmci: TVMCI$Test<C, T>;
    createTestCallTarget(testContext: C, testNode: RootNode): T;
    createTestContext(testName: string): C;
    finishWarmup(testContext: C, callTarget: T): void;
}