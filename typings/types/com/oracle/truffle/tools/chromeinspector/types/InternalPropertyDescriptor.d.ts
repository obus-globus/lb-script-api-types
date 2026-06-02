import type { RemoteObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class InternalPropertyDescriptor extends Object {
    constructor(name: string, value: RemoteObject)
    // private jsonObject: JSONObject;
    toJSON(): JSONObject;
}