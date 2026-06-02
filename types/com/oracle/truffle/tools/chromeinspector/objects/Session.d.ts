import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { AbstractInspectorObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorObject.d.ts'
import type { Session$Listeners } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/Session$Listeners.d.ts'
import type { UndefinedProvider } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/UndefinedProvider.d.ts'
import type { InspectServerSession } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectServerSession.d.ts'
import type { AtomicLong } from '../../../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Session extends AbstractInspectorObject {
    static isInstance(paramobj: TruffleObject): boolean;
    constructor(contextSupplier: () => InspectorExecutionContext, undefinedProvider: UndefinedProvider)
    // private cmdId: AtomicLong;
    // private contextSupplier: () => InspectorExecutionContext;
    // private iss: InspectServerSession;
    // private listeners: Session$Listeners;
    // private undefinedProvider: UndefinedProvider;
    // private addListener(arguments: Object[], prepend: boolean): Object;
    // private addOnceListener(arguments: Object[], prepend: boolean): Object;
    // private connect(): Object;
    // private disconnect(): Object;
    // private emit(arguments: Object[]): Object;
    getFieldValueOrNull(name: string): Object;
    // private getListeners(): Session$Listeners;
    getMembers(includeInternal: boolean): TruffleObject;
    invokeMember(name: string, arguments: Object[]): Object;
    isField(name: string): boolean;
    isMethod(name: string): boolean;
    // private listenerCount(arguments: Object[]): Object;
    // private listeners(arguments: Object[]): Object;
    // private post(arguments: Object[]): Object;
    // private post(method: string, paramsObject: TruffleObject, callback: TruffleObject): void;
    // private removeAllListeners(arguments: Object[]): Object;
    // private removeListener(arguments: Object[]): Object;
}