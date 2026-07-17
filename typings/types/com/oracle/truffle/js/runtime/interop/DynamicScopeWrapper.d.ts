import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { DynamicObject$GetKeyArrayNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetKeyArrayNode.d.ts'
import type { DynamicObject$GetNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetNode.d.ts'
import type { DynamicObject$GetPropertyFlagsNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetPropertyFlagsNode.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DynamicScopeWrapper extends Object implements TruffleObject {
    constructor(scope: JSDynamicObject)
    // private scope: JSDynamicObject;
    getMembers(includeInternal: boolean, getKeyArray: DynamicObject$GetKeyArrayNode, getValue: DynamicObject$GetNode): Object;
    hasMembers(): boolean;
    isConst(name: TruffleString, access: DynamicObject$GetPropertyFlagsNode): boolean;
    isMemberInsertable(name: string): boolean;
    isMemberModifiable(name: string, fromJavaStringNode: TruffleString$FromJavaStringNode, getValue: DynamicObject$GetNode, getFlags: DynamicObject$GetPropertyFlagsNode): boolean;
    isMemberReadable(name: string, fromJavaStringNode: TruffleString$FromJavaStringNode, getValue: DynamicObject$GetNode): boolean;
    // private isMemberReadableIntl(tsName: TruffleString, getValue: DynamicObject$GetNode): boolean;
    readMember(name: string, fromJavaStringNode: TruffleString$FromJavaStringNode, getValue: DynamicObject$GetNode, exportValueNode: ExportValueNode): Object;
    writeMember(name: string, value: Object, fromJavaStringNode: TruffleString$FromJavaStringNode, getValue: DynamicObject$GetNode, getFlags: DynamicObject$GetPropertyFlagsNode, setValue: DynamicObject$PutNode): void;
}