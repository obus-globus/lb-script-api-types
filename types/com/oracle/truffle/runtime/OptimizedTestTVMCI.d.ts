import type { TVMCI$Test } from '../../../../com/oracle/truffle/api/impl/TVMCI$Test.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { OptimizedTestTVMCI$GraalTestContext } from '../../../../com/oracle/truffle/runtime/OptimizedTestTVMCI$GraalTestContext.d.ts'
export class OptimizedTestTVMCI extends TVMCI$Test<OptimizedTestTVMCI$GraalTestContext, OptimizedCallTarget> {
    constructor()
    createTestCallTarget(testContext: OptimizedTestTVMCI$GraalTestContext, testNode: RootNode): OptimizedCallTarget;
    createTestContext(testName: string): OptimizedTestTVMCI$GraalTestContext;
    finishWarmup(testContext: OptimizedTestTVMCI$GraalTestContext, callTarget: OptimizedCallTarget): void;
}