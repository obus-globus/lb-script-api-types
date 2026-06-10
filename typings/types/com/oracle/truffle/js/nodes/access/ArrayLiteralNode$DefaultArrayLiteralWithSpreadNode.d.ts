import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ArrayLiteralNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode.d.ts'
import type { ArrayLiteralNode$ArrayContentType } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode$ArrayContentType.d.ts'
import type { ArrayLiteralNode$DefaultArrayLiteralNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode$DefaultArrayLiteralNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ArrayLiteralNode$DefaultArrayLiteralWithSpreadNode extends ArrayLiteralNode$DefaultArrayLiteralNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static create(paramcontext: JSContext, paramelements: (Object | null)[]): ArrayLiteralNode;
    static createByteArray(paramvalues: (Object | null)[]): number[];
    static createDoubleArray(paramvalues: (Object | null)[]): number[];
    static createIntArray(paramvalues: (Object | null)[]): number[];
    static createWithSpread(paramcontext: JSContext, paramelements: (Object | null)[]): ArrayLiteralNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static identifyPrimitiveContentType(paramvalues: (Object | null)[], paramcreateBytes: boolean): ArrayLiteralNode$ArrayContentType;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, elements: JavaScriptNode[])
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doDefault(frame: VirtualFrame, growProfile: InlinedBranchProfile, holesProfile: InlinedConditionProfile): JSArrayObject;
}