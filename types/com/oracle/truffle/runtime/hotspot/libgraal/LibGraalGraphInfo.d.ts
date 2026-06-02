import type { TruffleCompilerListener$GraphInfo } from '../../../../../../com/oracle/truffle/compiler/TruffleCompilerListener$GraphInfo.d.ts'
import type { LibGraalScopedHandle } from '../../../../../../com/oracle/truffle/runtime/hotspot/libgraal/LibGraalScopedHandle.d.ts'
export class LibGraalGraphInfo extends LibGraalScopedHandle implements TruffleCompilerListener$GraphInfo {
    constructor(handle: number)
    getNodeCount(): number;
    getNodeTypes(simpleNames: boolean): string[];
}