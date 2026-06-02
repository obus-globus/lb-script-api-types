import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { InspectorExecutionContext } from '../../../../../../com/oracle/truffle/tools/chromeinspector/InspectorExecutionContext.d.ts'
import type { AbstractInspectorObject } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorObject.d.ts'
import type { UndefinedProvider } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/UndefinedProvider.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SessionClass extends AbstractInspectorObject {
    static isInstance(paramobj: TruffleObject): boolean;
    constructor(contextSupplier: () => InspectorExecutionContext, undefinedProvider: UndefinedProvider)
    // private contextSupplier: () => InspectorExecutionContext;
    // private undefinedProvider: UndefinedProvider;
    getFieldValueOrNull(name: string): Object;
    getMembers(includeInternal: boolean): TruffleObject;
    instantiate(arguments: Object[]): Object;
    invokeMember(name: string, arguments: Object[]): Object;
    isField(name: string): boolean;
    isInstantiable(): boolean;
    isMethod(name: string): boolean;
}