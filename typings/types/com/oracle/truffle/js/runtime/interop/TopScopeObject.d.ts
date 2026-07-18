import type { TruffleLanguage } from '../../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TopScopeObject extends Object implements TruffleObject {
    static empty(): TopScopeObject;
    constructor(objects: Object[])
    // private objects: Object[];
    // private scopeIndex: number;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getMembers(includeInternal: boolean, interop: InteropLibrary): Object;
    getScopeParent(): Object;
    hasLanguage(): boolean;
    hasMemberReadSideEffects(member: string, interop: InteropLibrary): boolean;
    hasMemberWriteSideEffects(member: string, interop: InteropLibrary): boolean;
    hasMembers(): boolean;
    hasScopeParent(): boolean;
    isMemberInsertable(member: string, interop: InteropLibrary): boolean;
    isMemberModifiable(member: string, interop: InteropLibrary): boolean;
    isMemberReadable(member: string, interop: InteropLibrary): boolean;
    isMemberRemovable(member: string, interop: InteropLibrary): boolean;
    isScope(): boolean;
    readMember(member: string, interop: InteropLibrary): Object;
    removeMember(member: string, interop: InteropLibrary): void;
    toDisplayString(allowSideEffects: boolean): Object;
    writeMember(member: string, value: Object, interop: InteropLibrary): void;
}