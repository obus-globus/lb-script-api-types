import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractInspectorObject extends Object implements TruffleObject {
    constructor()
    // private createMethodExecutable(name: string): TruffleObject;
    getFieldValueOrNull(name: string): Object;
    getMembers(includeInternal: boolean): Object;
    getMethodExecutable(name: string): TruffleObject;
    hasMembers(): boolean;
    identityHashCode(): number;
    instantiate(arguments: Object[]): Object;
    invokeMember(name: string, arguments: Object[]): Object;
    isField(name: string): boolean;
    isIdenticalOrUndefined(other: Object): TriState;
    isInstantiable(): boolean;
    isMemberInvocable(member: string): boolean;
    isMemberReadable(member: string): boolean;
    isMethod(name: string): boolean;
    readMember(name: string): Object;
}