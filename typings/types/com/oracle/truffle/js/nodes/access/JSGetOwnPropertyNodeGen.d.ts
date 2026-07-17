import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { JSGetOwnPropertyNodeGen$CachedOrdinaryData } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNodeGen$CachedOrdinaryData.d.ts'
import type { JSGetOwnPropertyNodeGen$ForeignObjectData } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNodeGen$ForeignObjectData.d.ts'
import type { ToArrayIndexNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNode.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSGetOwnPropertyNodeGen extends JSGetOwnPropertyNode {
    static create(): JSGetOwnPropertyNode;
    static create(paramneedValue: boolean): JSGetOwnPropertyNode;
    static create(paramneedValue: boolean, paramneedEnumerability: boolean, paramneedConfigurability: boolean, paramneedWritability: boolean, paramallowCaching: boolean): JSGetOwnPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(needValue: boolean, needEnumerability: boolean, needConfigurability: boolean, needWritability: boolean, allowCaching: boolean)
    // private array_arrayGetOwnProperty__field1_: Object;
    // private array_toArrayIndexNode_: ToArrayIndexNode;
    // private cachedOrdinary_cache: JSGetOwnPropertyNodeGen$CachedOrdinaryData;
    // private foreignObject_cache: JSGetOwnPropertyNodeGen$ForeignObjectData;
    // private generic_jsclassProfile_: JSClassProfile;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: Object): PropertyDescriptor;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): PropertyDescriptor;
    removeCachedOrdinary_(s2_: JSGetOwnPropertyNodeGen$CachedOrdinaryData): void;
}