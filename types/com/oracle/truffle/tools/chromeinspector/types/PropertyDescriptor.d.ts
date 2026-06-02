import type { RemoteObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class PropertyDescriptor extends Object {
    constructor(name: string, value: RemoteObject, writable: boolean, get: RemoteObject, set: RemoteObject, configurable: boolean, enumerable: boolean, wasThrown: boolean, isOwn: boolean, symbol: RemoteObject)
    // private jsonObject: JSONObject;
    toJSON(): JSONObject;
}