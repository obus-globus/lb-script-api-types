import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DebugScope$SubtractedVariables extends Object implements TruffleObject {
    constructor(allVariables: Object, removedVariables: Object)
    // private allLibrary: InteropLibrary;
    // private allVariables: Object;
    // private removedLibrary: InteropLibrary;
    // private removedVariables: Object;
    getMembers(includeInternal: boolean): Object;
    hasMemberReadSideEffects(member: string): boolean;
    hasMemberWriteSideEffects(member: string): boolean;
    hasMembers(): boolean;
    // private isAmongMembers(member: string): boolean;
    isMemberInsertable(member: string): boolean;
    isMemberModifiable(member: string): boolean;
    isMemberReadable(member: string): boolean;
    readMember(member: string): Object;
    writeMember(member: string, value: Object): void;
}