import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { AbstractFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/AbstractFunctionArgumentsNode.d.ts'
import type { JSFunctionArgumentsNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionArgumentsNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class SpreadFunctionArgumentsNode extends JSFunctionArgumentsNode {
    static cloneUninitialized<T extends AbstractFunctionArgumentsNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static create(paramcontext: JSContext, paramargs: JavaScriptNode[]): AbstractFunctionArgumentsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(args: JavaScriptNode[])
    copyUninitialized(materializedTags: Class<Tag>[]): AbstractFunctionArgumentsNode;
    fillObjectArray(frame: VirtualFrame, arguments: Object[], fixedArgumentsLength: number, growBranch: InlinedBranchProfile): Object[];
    getCount(frame: VirtualFrame): number;
}