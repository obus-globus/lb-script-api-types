import type { HostStackTraceElementObject } from '../../../../../com/oracle/truffle/api/exception/HostStackTraceElementObject.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HostStackTraceElementObject$DeclaringMetaObject extends Object implements TruffleObject {
    constructor(null_: HostStackTraceElementObject)
    getMetaQualifiedName(): Object;
    getMetaSimpleName(): Object;
    isMetaInstance(instance: Object): boolean;
    isMetaObject(): boolean;
}