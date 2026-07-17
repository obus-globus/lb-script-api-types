import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { GuestContext } from '../../../../../com/oracle/truffle/polyglot/isolate/GuestContext.d.ts'
import type { ReflectionLibraryDispatch } from '../../../../../com/oracle/truffle/polyglot/isolate/ReflectionLibraryDispatch.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GuestObjectReferences extends Object implements ReflectionLibraryDispatch {
    constructor(guestContext: GuestContext)
    // private exportById: JavaMap<number, TruffleObject>;
    // private guestContext: GuestContext;
    dispatch(objId: number, messageId: number, args: Object[]): Object;
    getObject(objId: number): TruffleObject;
    registerGuestObject(truffleObject: TruffleObject): number;
    releaseAllReferences(): void;
    releaseReference(objectHandle: number): void;
}