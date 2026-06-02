import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { HasHiddenKeyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasHiddenKeyCacheNode.d.ts'
import type { HasHiddenKeyCacheNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/HasHiddenKeyCacheNodeGen$CachedData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasHiddenKeyCacheNodeGen extends HasHiddenKeyCacheNode {
    static create(paramkey: HiddenKey): HasHiddenKeyCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(key: HiddenKey)
    // private cached_cache: HasHiddenKeyCacheNodeGen$CachedData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: Object): boolean;
    executeHasHiddenKey(arg0Value: Object): boolean;
    removeCached_(s0_: HasHiddenKeyCacheNodeGen$CachedData): void;
}