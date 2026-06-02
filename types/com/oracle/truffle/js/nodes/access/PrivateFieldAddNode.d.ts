import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class PrivateFieldAddNode extends JavaScriptBaseNode {
    static create(): PrivateFieldAddNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doFallback(target: Object, key: Object, value: Object): void;
    doFieldAdd(target: JSObject, key: HiddenKey, value: Object, access: DynamicObjectLibrary): void;
    // private duplicate(key: HiddenKey): Object;
    execute(target: Object, key: Object, value: Object): void;
}