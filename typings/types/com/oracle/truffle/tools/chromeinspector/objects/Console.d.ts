import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { AbstractInspectorObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorObject.d.ts'
import type { UndefinedProvider } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/UndefinedProvider.d.ts'
import type { InspectorServerConnection } from '../../../../../../com/oracle/truffle/tools/chromeinspector/server/InspectorServerConnection.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Console extends AbstractInspectorObject {
    static isInstance(paramobj: TruffleObject): boolean;
    constructor(connection: InspectorServerConnection, undefinedProvider: UndefinedProvider)
    // private connection: InspectorServerConnection;
    // private time: JavaMap<Object, number>;
    // private undefinedProvider: UndefinedProvider;
    getFieldValueOrNull(name: string): Object;
    getMembers(includeInternal: boolean): TruffleObject;
    invokeMember(name: string, arguments: Object[]): Object;
    isField(name: string): boolean;
    isMethod(name: string): boolean;
    setConnection(newConnection: InspectorServerConnection): void;
}