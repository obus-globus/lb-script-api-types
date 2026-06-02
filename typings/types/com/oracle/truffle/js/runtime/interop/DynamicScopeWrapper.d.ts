import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DynamicScopeWrapper extends Object implements TruffleObject {
    constructor(scope: JSDynamicObject)
    // private scope: JSDynamicObject;
    getMembers(includeInternal: boolean, access: DynamicObjectLibrary): Object;
    hasMembers(): boolean;
    isConst(name: TruffleString, access: DynamicObjectLibrary): boolean;
    isMemberInsertable(name: string): boolean;
    isMemberModifiable(name: string, fromJavaStringNode: TruffleString$FromJavaStringNode, access: DynamicObjectLibrary): boolean;
    isMemberReadable(name: string, fromJavaStringNode: TruffleString$FromJavaStringNode, access: DynamicObjectLibrary): boolean;
    // private isMemberReadableIntl(tsName: TruffleString, access: DynamicObjectLibrary): boolean;
    readMember(name: string, fromJavaStringNode: TruffleString$FromJavaStringNode, access: DynamicObjectLibrary, exportValueNode: ExportValueNode): Object;
    writeMember(name: string, value: Object, fromJavaStringNode: TruffleString$FromJavaStringNode, access: DynamicObjectLibrary): void;
}