import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsArrayNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode.d.ts'
import type { IsArrayNode$Kind } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode$Kind.d.ts'
import type { IsArrayNodeGen$JSFastArrayShapeData } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNodeGen$JSFastArrayShapeData.d.ts'
import type { IsArrayNodeGen$OtherCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNodeGen$OtherCachedData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsArrayNodeGen extends IsArrayNode {
    static create(paramkind: IsArrayNode$Kind): IsArrayNode;
    static createIsAnyArray(): IsArrayNode;
    static createIsArray(): IsArrayNode;
    static createIsFastArray(): IsArrayNode;
    static createIsFastOrTypedArray(): IsArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(kind: IsArrayNode$Kind)
    // private jSFastArrayShape_cache: IsArrayNodeGen$JSFastArrayShapeData;
    // private otherCached_cache: IsArrayNodeGen$OtherCachedData;
    // private state_0_: number;
    execute(arg0Value: Object): boolean;
    // private executeAndSpecialize(arg0Value: Object): boolean;
}