import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSArrayBufferObject$Shared } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Shared.d.ts'
import type { JSDataViewObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSDataViewObject.d.ts'
import type { JSErrorObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSErrorObject.d.ts'
import type { JSMapObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSMapObject.d.ts'
import type { JSRegExpObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSRegExpObject.d.ts'
import type { JSSetObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSSetObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSWebAssemblyMemoryObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyMemoryObject.d.ts'
import type { JSWebAssemblyModuleObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyModuleObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SerializedData extends Object {
    constructor(value: Object)
    constructor(value: Object, transferSet: JSArrayBufferObject[])
    // private data: Object[];
    // private memory: Map<Object, number>;
    // private nextId: number;
    // private assignId(value: Object): void;
    deserialize(realm: JSRealm): Object;
    // private serializeArrayBuffer(arrayBuffer: JSArrayBufferObject): void;
    // private serializeArrayBufferImpl(content: Object, byteLength: number, maxByteLength: number): void;
    // private serializeArrayBufferView(arrayBufferView: JSTypedArrayObject): void;
    // private serializeDataView(dataView: JSDataViewObject): void;
    // private serializeError(errorObject: JSErrorObject): void;
    // private serializeMap(mapObject: JSMapObject): void;
    // private serializeProperties(object: JSObject): void;
    // private serializeRegExp(regExp: JSRegExpObject): void;
    // private serializeSet(setObject: JSSetObject): void;
    // private serializeSharedArrayBuffer(sharedArrayBuffer: JSArrayBufferObject$Shared): void;
    // private serializeTransferable(arrayBuffer: JSArrayBufferObject): void;
    // private serializeValue(value: Object): void;
    // private serializeWebAssemblyMemory(memoryObject: JSWebAssemblyMemoryObject): void;
    // private serializeWebAssemblyModule(moduleObject: JSWebAssemblyModuleObject): void;
}