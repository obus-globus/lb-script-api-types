import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleString$SwitchEncodingNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SwitchEncodingNode.d.ts'
import type { TruffleString$ToJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ToJavaStringNode.d.ts'
import type { ExportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ExportValueNode.d.ts'
import type { ImportValueNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSInteropUtil extends Object {
    static call(paramfunction: Object, paramargs: Object[]): Object;
    static construct(paramtarget: Object, paramargs: Object[]): Object;
    static copyFromBuffer(parambuffer: JSArrayBufferObject, parambyteOffset: number, paramdestination: number[], paramdestinationOffset: number, parambyteLength: number, paraminterop: InteropLibrary): void;
    static delete(paramcontext: JSContext, paramtarget: Object, parampropertyKey: Object, paramstrict: boolean): boolean;
    static deleteArrayElement(paramtarget: Object, paramindex: number, paraminterop: InteropLibrary, paramstrict: boolean): boolean;
    static deleteHashEntry(paramtarget: Object, paramkey: Object, paraminterop: InteropLibrary, paramstrict: boolean): boolean;
    static deleteMember(paramtarget: Object, paramname: TruffleString, paraminterop: InteropLibrary, paramstrict: boolean): boolean;
    static foreignInteropBufferAsByteBuffer(paramforeignInteropBuffer: Object, paramasByteBufferInterop: InteropLibrary, paramhostInterop: InteropLibrary, paramrealm: JSRealm): ByteBuffer;
    static formatError(paramerror: Object, paraminteropExc: InteropLibrary, paraminteropStr: InteropLibrary): string;
    static getArrayElementProperty(paramobject: Object, paramindex: number, paraminterop: InteropLibrary, paramimportValueNode: ImportValueNode): PropertyDescriptor;
    static getArraySize(paramforeignObj: Object, paraminterop: InteropLibrary, paramoriginatingNode: Node): number;
    static getExistingMemberProperty(paramobject: Object, paramkey: string, paraminterop: InteropLibrary, paramimportValueNode: ImportValueNode): PropertyDescriptor;
    static getOrDefault(paramcontext: JSContext, paramtarget: Object, parampropertyKey: Object, paramreceiver: Object, paramdefaultValue: Object): Object;
    static getOwnProperty(paramobject: Object, parampropertyKey: TruffleString): PropertyDescriptor;
    static getOwnProperty(paramobject: Object, parampropertyKey: TruffleString, paraminterop: InteropLibrary, paramimportValueNode: ImportValueNode, paramcharAtNode: TruffleString$ReadCharUTF16Node): PropertyDescriptor;
    static hasProperty(paramobj: Object, paramkey: Object): boolean;
    static isBoxedPrimitive(paramreceiver: Object, paraminterop: InteropLibrary): boolean;
    static jsInteropBufferAsByteBuffer(paraminteropArrayBuffer: JSArrayBufferObject, paramasByteBufferInterop: InteropLibrary, paramhostInterop: InteropLibrary, paramrealm: JSRealm): ByteBuffer;
    static keys(paramobj: Object): Object[];
    static readArrayElementOrDefault(paramobj: Object, paramindex: number, paramdefaultValue: Object): Object;
    static readArrayElementOrDefault(paramobj: Object, paramindex: number, paramdefaultValue: Object, paraminterop: InteropLibrary, paramimportValue: ImportValueNode): Object;
    static readBuffer(parambuffer: Object, parambyteOffset: number, paramdestination: number[], paramdestinationOffset: number, parambyteLength: number, paraminterop: InteropLibrary): void;
    static readMemberOrDefault(paramobj: Object, parammember: Object, paramdefaultValue: Object): Object;
    static readMemberOrDefault(paramobj: Object, parammember: Object, paramdefaultValue: Object, paraminterop: InteropLibrary, paramimportValue: ImportValueNode, paramtoJavaStringNode: TruffleString$ToJavaStringNode): Object;
    static set(paramcontext: JSContext, paramtarget: Object, parampropertyKey: Object, paramvalue: Object, paramstrict: boolean): boolean;
    static setArraySize(paramobj: Object, paramvalue: Object, paramisStrict: boolean, paraminterop: InteropLibrary, paramoriginatingNode: Node, paramerrorBranch: BranchProfile): boolean;
    static toPrimitiveOrDefaultLossless(paramobj: Object, paramdefaultValue: Object, paraminterop: InteropLibrary, paramswitchEncoding: TruffleString$SwitchEncodingNode, paramoriginatingNode: Node): Object;
    static toPrimitiveOrDefaultLossy(paramobj: Object, paramdefaultValue: Object, paraminterop: InteropLibrary, paramoriginatingNode: Node): Object;
    static writeBuffer(paramdestination: Object, paramdestinationOffset: number, paramsource: number[], paramsourceOffset: number, paramcopyLength: number, paraminterop: InteropLibrary): void;
    static writeMember(paramobj: Object, parammember: Object, paramvalue: Object): boolean;
    static writeMember(paramobj: Object, parammember: Object, paramvalue: Object, paraminterop: InteropLibrary, paramexportValue: ExportValueNode, paramstrict: boolean, paramoriginatingNode: Node): boolean;
    private constructor()
}