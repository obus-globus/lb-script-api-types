import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { OwnPropertyKeysNode } from '../../../../../../com/oracle/truffle/js/nodes/access/OwnPropertyKeysNode.d.ts'
import type { OwnPropertyKeysNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/OwnPropertyKeysNodeGen$ForeignObject0Data.d.ts'
import type { OwnPropertyKeysNodeGen$ForeignObject1Data } from '../../../../../../com/oracle/truffle/js/nodes/access/OwnPropertyKeysNodeGen$ForeignObject1Data.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class OwnPropertyKeysNodeGen extends OwnPropertyKeysNode {
    static create(): OwnPropertyKeysNode;
    static getUncached(): OwnPropertyKeysNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private foreignObject0_cache: OwnPropertyKeysNodeGen$ForeignObject0Data;
    // private foreignObject1_cache: OwnPropertyKeysNodeGen$ForeignObject1Data;
    // private object_classProfile_: JSClassProfile;
    // private state_0_: number;
    execute(arg0Value: Object): Object[];
    // private executeAndSpecialize(arg0Value: Object): Object[];
    // private fallbackGuard_(state_0: number, arg0Value: Object): boolean;
    // private foreignObject1Boundary(state_0: number, s2_: OwnPropertyKeysNodeGen$ForeignObject1Data, arg0Value: Object): Object[];
}