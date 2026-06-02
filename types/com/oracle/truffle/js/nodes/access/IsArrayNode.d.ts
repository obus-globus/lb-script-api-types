import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsArrayNode$Kind } from '../../../../../../com/oracle/truffle/js/nodes/access/IsArrayNode$Kind.d.ts'
import type { JSArgumentsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArgumentsObject.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class IsArrayNode extends JavaScriptBaseNode {
    static createIsAnyArray(): IsArrayNode;
    static createIsArray(): IsArrayNode;
    static createIsFastArray(): IsArrayNode;
    static createIsFastOrTypedArray(): IsArrayNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(kind: IsArrayNode$Kind)
    // private kind: IsArrayNode$Kind;
    checkResult(object: Object, result: boolean): boolean;
    doJSArgumentsObject(object: JSArgumentsObject): boolean;
    doJSArray(object: JSArrayObject): boolean;
    doJSFastArray(object: JSArrayObject): boolean;
    doJSFastArrayShape(object: JSArrayObject, cachedShape: Shape): boolean;
    doJSObjectPrototype(object: Object): boolean;
    doJSTypedArray(object: JSTypedArrayObject): boolean;
    doNotJSArray(object: Object): boolean;
    doOther(object: Object): boolean;
    doOtherCached(object: Object, cachedClass: Class<Object>): boolean;
    execute(operand: Object): boolean;
    getInitialArrayShape(): Shape;
    isArray(object: Object): boolean;
}