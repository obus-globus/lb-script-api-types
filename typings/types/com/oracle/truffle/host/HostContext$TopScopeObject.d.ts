import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostContext$TopScopeObject extends Object implements TruffleObject {
    private constructor(context: HostContext)
    // private context: HostContext;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getMembers(includeInternal: boolean): Object;
    hasLanguage(): boolean;
    hasMembers(): boolean;
    isMemberReadable(member: string): boolean;
    isScope(): boolean;
    readMember(member: string): Object;
    toDisplayString(allowSideEffects: boolean): Object;
}