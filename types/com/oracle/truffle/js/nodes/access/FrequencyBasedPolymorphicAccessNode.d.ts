import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { FrequencyBasedPolymorphicAccessNode$HitsCount } from '../../../../../../com/oracle/truffle/js/nodes/access/FrequencyBasedPolymorphicAccessNode$HitsCount.d.ts'
import type { PropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class FrequencyBasedPolymorphicAccessNode<T extends PropertyCacheNode<Object>> extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(size: number)
    // private hitsDistributionMap: Map<Object, FrequencyBasedPolymorphicAccessNode$HitsCount>;
    // private maxHitsPerKey: number;
    // private size: number;
    // private totalHits: number;
    getHighFrequencyNodes(): T[];
    interpreterSample(key: Object): void;
    setHighFrequencyNode(position: number, key: Object): void;
    // private stopSampling(): void;
}