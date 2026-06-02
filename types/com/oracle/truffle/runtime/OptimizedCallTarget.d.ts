import type { ReplaceObserver } from '../../../../com/oracle/truffle/api/ReplaceObserver.d.ts'
import type { RootCallTarget } from '../../../../com/oracle/truffle/api/RootCallTarget.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { TruffleCompilable } from '../../../../com/oracle/truffle/compiler/TruffleCompilable.d.ts'
import type { EngineData } from '../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OptimizedCallTarget extends Object implements ReplaceObserver, RootCallTarget, TruffleCompilable {
    constructor(engine: EngineData)
    constructor(sourceCallTarget: OptimizedCallTarget, rootNode: RootNode)
}