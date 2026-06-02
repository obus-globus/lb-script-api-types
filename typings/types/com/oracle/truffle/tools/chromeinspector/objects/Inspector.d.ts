import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { AbstractInspectorObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorObject.d.ts'
import type { Console } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/Console.d.ts'
import type { SessionClass } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/SessionClass.d.ts'
import type { UndefinedProvider } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/UndefinedProvider.d.ts'
import type { InspectorServerConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServerConnection.d.ts'
import type { InspectorServerConnection$Open } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServerConnection$Open.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Inspector extends AbstractInspectorObject {
    static isInstance(paramobj: TruffleObject): boolean;
    constructor(env: TruffleInstrument$Env, connection: InspectorServerConnection, open: InspectorServerConnection$Open, contextSupplier: () => InspectorExecutionContext)
    // private connection: InspectorServerConnection;
    // private console: Console;
    // private open: InspectorServerConnection$Open;
    // private sessionType: SessionClass;
    // private undefinedProvider: UndefinedProvider;
    getFieldValueOrNull(name: string): Object;
    getMembers(includeInternal: boolean): TruffleObject;
    invokeMember(name: string, arguments: Object[]): Object;
    isField(name: string): boolean;
    isMethod(name: string): boolean;
    // private methodClose(): Object;
    // private methodOpen(arguments: Object[]): Object;
    // private methodUrl(): Object;
}