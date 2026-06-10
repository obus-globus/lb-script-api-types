import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ArrayPrototypeBuiltins$BasicArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$BasicArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { PropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/PropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { ForeignObjectPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ForeignObjectPrototypeNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayToStringNode extends ArrayPrototypeBuiltins$BasicArrayOperation {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private callJoinNode: JSFunctionCallNode;
    // private callToStringNode: JSFunctionCallNode;
    // private foreignObjectPrototypeNode: ForeignObjectPrototypeNode;
    // private hostLanguageClass: Class<Object>;
    // private importValueNode: ImportValueNode;
    // private interopLibrary: InteropLibrary;
    // private joinPropertyNode: PropertyNode;
    // private toStringPropertyNode: PropertyNode;
    // private callJoin(target: Object, function_: Object): Object;
    // private callToString(target: Object, function_: Object): Object;
    // private getForeignObjectPrototype(truffleObject: Object): JSDynamicObject;
    // private getHostLanguageClass(): Class<Object>;
    // private getInterop(): InteropLibrary;
    // private getJoinProperty(target: Object, receiver: Object): Object;
    // private getToStringProperty(target: Object): Object;
    // private importValue(value: Object): Object;
    // private shouldTryOwnJoin(arrayObj: Object): boolean;
    toString(): string;
    toString(thisObj: Object, isJSObjectProfile: InlinedConditionProfile): Object;
    // private toStringForeign(arrayObj: Object): Object;
}