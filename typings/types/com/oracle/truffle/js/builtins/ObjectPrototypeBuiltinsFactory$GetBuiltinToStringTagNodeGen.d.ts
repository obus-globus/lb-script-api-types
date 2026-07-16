import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ObjectPrototypeBuiltins$GetBuiltinToStringTagNode } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltins$GetBuiltinToStringTagNode.d.ts'
import type { ObjectPrototypeBuiltinsFactory$GetBuiltinToStringTagNodeGen$CachedData } from '../../../../../com/oracle/truffle/js/builtins/ObjectPrototypeBuiltinsFactory$GetBuiltinToStringTagNodeGen$CachedData.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
export class ObjectPrototypeBuiltinsFactory$GetBuiltinToStringTagNodeGen extends ObjectPrototypeBuiltins$GetBuiltinToStringTagNode {
    static create(): ObjectPrototypeBuiltins$GetBuiltinToStringTagNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cached_cache: ObjectPrototypeBuiltinsFactory$GetBuiltinToStringTagNodeGen$CachedData;
    // private state_0_: number;
    execute(arg0Value: JSObject): TruffleString;
    // private executeAndSpecialize(arg0Value: JSObject): TruffleString;
}