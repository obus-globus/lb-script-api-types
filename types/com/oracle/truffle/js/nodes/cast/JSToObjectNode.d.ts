import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToObjectNode extends JavaScriptBaseNode {
    static create(): JSToObjectNode;
    static getUncached(): JSToObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doBigInt(value: BigInt): JSDynamicObject;
    doBoolean(value: boolean): JSDynamicObject;
    doDouble(value: number): JSDynamicObject;
    doForeignObject(value: Object, interop: InteropLibrary): Object;
    doInt(value: number): JSDynamicObject;
    doJSObject(object: JSObject): Object;
    doNullOrUndefined(object: Object): JSDynamicObject;
    doString(value: TruffleString): JSDynamicObject;
    doSymbol(value: Symbol): JSDynamicObject;
    execute(value: Object): Object;
}