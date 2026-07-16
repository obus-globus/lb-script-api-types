import type { InlineSupport$InlineTarget } from '../../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlineTarget.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { GetIteratorDirectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetIteratorDirectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetIteratorDirectNodeGen extends GetIteratorDirectNode {
    static create(): GetIteratorDirectNode;
    static getUncached(): GetIteratorDirectNode;
    static inline(paramtarget: InlineSupport$InlineTarget): GetIteratorDirectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private get1_interop_: InteropLibrary;
    // private getNextMethodNode: PropertyGetNode;
    // private state_0_: number;
    execute(arg0Value: Node, arg1Value: Object): IteratorRecord;
    execute(iterator: Object): IteratorRecord;
    // private executeAndSpecialize(arg0Value: Node, arg1Value: Object): IteratorRecord;
    // private fallbackGuard_(state_0: number, arg0Value: Node, arg1Value: Object): boolean;
}