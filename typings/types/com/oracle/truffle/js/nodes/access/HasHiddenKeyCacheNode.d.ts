import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class HasHiddenKeyCacheNode extends JavaScriptBaseNode {
    static create(paramkey: HiddenKey): HasHiddenKeyCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: HiddenKey)
    // private key: HiddenKey;
    doUncached(object: JSDynamicObject): boolean;
    executeHasHiddenKey(object: Object): boolean;
    getPropertyCacheLimit(): number;
}