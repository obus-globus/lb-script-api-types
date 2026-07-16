import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ListGetNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { ListSizeNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { EnumerableOwnPropertyNamesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerableOwnPropertyNamesNode.d.ts'
import type { EnumerableOwnPropertyNamesNodeGen$EnumerableOwnPropertyNamesForeign0Data } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerableOwnPropertyNamesNodeGen$EnumerableOwnPropertyNamesForeign0Data.d.ts'
import type { EnumerableOwnPropertyNamesNodeGen$EnumerableOwnPropertyNamesForeign1Data } from '../../../../../../com/oracle/truffle/js/nodes/access/EnumerableOwnPropertyNamesNodeGen$EnumerableOwnPropertyNamesForeign1Data.d.ts'
import type { HasOnlyShapePropertiesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasOnlyShapePropertiesNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EnumerableOwnPropertyNamesNodeGen extends EnumerableOwnPropertyNamesNode {
    static create(paramcontext: JSContext, paramkeys: boolean, paramvalues: boolean): EnumerableOwnPropertyNamesNode;
    static createKeys(paramcontext: JSContext): EnumerableOwnPropertyNamesNode;
    static createKeysValues(paramcontext: JSContext): EnumerableOwnPropertyNamesNode;
    static createValues(paramcontext: JSContext): EnumerableOwnPropertyNamesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, keys: boolean, values: boolean)
    // private enumerableOwnPropertyNamesForeign0_cache: EnumerableOwnPropertyNamesNodeGen$EnumerableOwnPropertyNamesForeign0Data;
    // private enumerableOwnPropertyNamesForeign1_cache: EnumerableOwnPropertyNamesNodeGen$EnumerableOwnPropertyNamesForeign1Data;
    // private enumerableOwnPropertyNames_hasOnlyShapeProperties_: HasOnlyShapePropertiesNode;
    // private enumerableOwnPropertyNames_jsclassProfile_: JSClassProfile;
    // private enumerableOwnPropertyNames_listGet_: ListGetNode;
    // private enumerableOwnPropertyNames_listSize_: ListSizeNode;
    // private state_0_: number;
    // private enumerableOwnPropertyNamesForeign1Boundary(state_0: number, s2_: EnumerableOwnPropertyNamesNodeGen$EnumerableOwnPropertyNamesForeign1Data, arg0Value: Object): (Object | null)[];
    execute(arg0Value: Object): (Object | null)[];
    // private executeAndSpecialize(arg0Value: Object): (Object | null)[];
}