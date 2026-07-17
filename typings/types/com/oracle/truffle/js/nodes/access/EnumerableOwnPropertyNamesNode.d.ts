import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { ListGetNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { ListSizeNode } from '../../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { HasOnlyShapePropertiesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasOnlyShapePropertiesNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class EnumerableOwnPropertyNamesNode extends JavaScriptBaseNode {
    static createKeys(paramcontext: JSContext): EnumerableOwnPropertyNamesNode;
    static createKeysValues(paramcontext: JSContext): EnumerableOwnPropertyNamesNode;
    static createValues(paramcontext: JSContext): EnumerableOwnPropertyNamesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, keys: boolean, values: boolean)
    // private context: JSContext;
    // private getOwnPropertyNode: JSGetOwnPropertyNode;
    // private hasFastShapesProfile: ConditionProfile;
    // private keys: boolean;
    // private values: boolean;
    // private createKeyValuePair(key: Object, value: Object): Object;
    enumerableOwnPropertyNames(thisObj: JSDynamicObject, jsclassProfile: JSClassProfile, listSize: ListSizeNode, listGet: ListGetNode, hasOnlyShapeProperties: HasOnlyShapePropertiesNode, growProfile: InlinedBranchProfile): (Object | null)[];
    enumerableOwnPropertyNamesForeign(obj: Object, node: Node, interop: InteropLibrary, members: InteropLibrary, asString: InteropLibrary, importValue: ImportValueNode, errorBranch: InlinedBranchProfile, switchEncodingNode: TruffleString$SwitchEncodingNode, toJavaStringNode: TruffleString$ToJavaStringNode, fromLongNode: TruffleString$FromLongNode): (Object | null)[];
    execute(obj: Object): (Object | null)[];
    getOwnProperty(thisObj: JSDynamicObject, key: Object): PropertyDescriptor;
}