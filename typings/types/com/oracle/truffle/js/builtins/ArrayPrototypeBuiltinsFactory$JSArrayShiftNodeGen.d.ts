import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayShiftNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayShiftNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSArrayFirstElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayFirstElementIndexNode.d.ts'
import type { JSArrayLastElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayLastElementIndexNode.d.ts'
import type { TestArrayNode } from '../../../../../com/oracle/truffle/js/nodes/array/TestArrayNode.d.ts'
import type { DeletePropertyNode } from '../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayPrototypeBuiltinsFactory$JSArrayShiftNodeGen extends ArrayPrototypeBuiltins$JSArrayShiftNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramcontext: JSContext, parambuiltin: JSBuiltin, paramarguments: JavaScriptNode[]): ArrayPrototypeBuiltins$JSArrayShiftNode;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(context: JSContext, builtin: JSBuiltin, arguments: JavaScriptNode[])
    // private arguments0_: JavaScriptNode;
    // private deletePropertyNode: DeletePropertyNode;
    // private hasHolesNode: TestArrayNode;
    // private isSealedNode: TestArrayNode;
    // private shiftForeign_arrays_: InteropLibrary;
    // private shiftJSArrayNode_field1_: Object;
    // private shiftSparse_firstElementIndexNode_: JSArrayFirstElementIndexNode;
    // private shiftSparse_lastElementIndexNode_: JSArrayLastElementIndexNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(arguments0Value: Object): Object;
    getArguments(): JavaScriptNode[];
}