import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { IsExtensibleNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsExtensibleNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { JSProxyObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSProxyObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export abstract class KeyInfoNode extends JavaScriptBaseNode {
    static INSERTABLE: number;
    static INVOCABLE: number;
    static MODIFIABLE: number;
    static READABLE: number;
    static READ_SIDE_EFFECTS: number;
    static REMOVABLE: number;
    static WRITABLE: number;
    static WRITE_SIDE_EFFECTS: number;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doProxy(proxy: JSProxyObject, key: string, query: number, getPrototype: GetPrototypeNode, isCallable: IsCallableNode, isExtensible: IsExtensibleNode, fromJavaStringNode: TruffleString$FromJavaStringNode): boolean;
    execute(receiver: JSDynamicObject, key: string, query: number): boolean;
}