import type { TruffleStackTraceElement } from '../../../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncHandlerRootNode$AsyncStackTraceInfo extends Object {
    constructor()
    constructor(promise: JSDynamicObject, stackTraceElement: TruffleStackTraceElement)
    promise: JSDynamicObject;
    stackTraceElement: TruffleStackTraceElement;
}