import type { Location } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/Location.d.ts'
import type { RemoteObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/types/RemoteObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Scope extends Object {
    constructor(type: string, object: RemoteObject, name: string, startLocation: Location, endLocation: Location, internalIndex: number)
    readonly endLocation: Location;
    readonly internalIndex: number;
    // private name: string;
    readonly object: RemoteObject;
    readonly startLocation: Location;
    readonly type: string;
    // private createJSON(): JSONObject;
    getEndLocation(): Location;
    getInternalIndex(): number;
    getObject(): RemoteObject;
    getStartLocation(): Location;
    getType(): string;
}