import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class ArrayCreateNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): ArrayCreateNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    doDefault(length: number, realm: JSRealm, proto: JSDynamicObject): JSArrayObject;
    doInvalidLength(length: number, realm: JSRealm, proto: JSDynamicObject): JSArrayObject;
    doLargeLength(length: number, realm: JSRealm, proto: JSDynamicObject): JSArrayObject;
    execute(length: number): JSArrayObject;
    execute(length: number, realm: JSRealm, proto: JSDynamicObject): JSArrayObject;
}