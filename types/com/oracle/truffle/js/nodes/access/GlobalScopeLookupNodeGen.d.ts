import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { GlobalScopeLookupNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GlobalScopeLookupNode.d.ts'
import type { GlobalScopeLookupNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/GlobalScopeLookupNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GlobalScopeLookupNodeGen extends GlobalScopeLookupNode {
    static create(paramvarName: TruffleString, paramwrite: boolean): GlobalScopeLookupNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(varName: TruffleString, write: boolean)
    // private absent_assumption_: Assumption;
    // private cached_cache: GlobalScopeLookupNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: Object): boolean;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    removeAbsent_(): void;
    removeCached_(s1_: GlobalScopeLookupNodeGen$CachedData): void;
}