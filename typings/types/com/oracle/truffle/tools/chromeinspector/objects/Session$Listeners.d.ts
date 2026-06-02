import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { UndefinedProvider } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/UndefinedProvider.d.ts'
import type { JSONMessageListener } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/JSONMessageListener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JSONObject } from '../../../../../../org/graalvm/shadowed/org/json/JSONObject.d.ts'
export class Session$Listeners extends Object implements JSONMessageListener {
    constructor(undefinedProvider: UndefinedProvider)
    // private callbacksMap: { [key: number]: TruffleObject };
    // private eventNames: Object[];
    // private listenersMap: { [key: string]: TruffleObject[] };
    // private undefinedProvider: UndefinedProvider;
    addCallback(id: number, callback: TruffleObject): void;
    // private addListener(eventName: Object, listener: TruffleObject, prepend: boolean): void;
    // private addOnceListener(eventName: Object, listener: TruffleObject, prepend: boolean): void;
    emit(eventName: Object, listenerArgs: Object[]): Object;
    getEventNames(): Object;
    // private listenerCount(eventName: Object): Object;
    // private listeners(eventName: Object): Object;
    onMessage(message: JSONObject): void;
    // private removeAll(eventName: Object): void;
    // private removeListener(eventName: Object, listener: TruffleObject): void;
}