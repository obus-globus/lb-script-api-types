import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ArrayLiteralNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode.d.ts'
import type { ArrayLiteralNode$ArrayContentType } from '../../../../../../com/oracle/truffle/js/nodes/access/ArrayLiteralNode$ArrayContentType.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArrayLiteralNode$ConstantEmptyArrayWithCapLiteralNode extends ArrayLiteralNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, paramelements: JavaScriptNode[]): ArrayLiteralNode;
    static createByteArray(paramvalues: Object[]): number[];
    static createDoubleArray(paramvalues: Object[]): number[];
    static createIntArray(paramvalues: Object[]): number[];
    static createWithSpread(paramcontext: JSContext, paramelements: JavaScriptNode[]): ArrayLiteralNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static identifyPrimitiveContentType(paramvalues: Object[], paramcreateBytes: boolean): ArrayLiteralNode$ArrayContentType;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, cap: number)
    // private capacity: number;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    execute(frame: VirtualFrame): JSArrayObject;
}