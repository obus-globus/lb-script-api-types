import type { GuestObjectReferences } from '../../../../../com/oracle/truffle/polyglot/isolate/GuestObjectReferences.d.ts'
import type { ReflectionLibraryDispatch } from '../../../../../com/oracle/truffle/polyglot/isolate/ReflectionLibraryDispatch.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Context } from '../../../../../org/graalvm/polyglot/Context.d.ts'
export class GuestContext extends Object {
    constructor(context: Context, polyglotContextReceiver: Object, guestToHostDispatch: ReflectionLibraryDispatch, hostStackSpaceHeadroom: number)
    // private context: Context;
    // private contextHandle: number;
    // private disposed: boolean;
    // private guestToHostDispatch: ReflectionLibraryDispatch;
    // private hostToGuestObjectReferences: GuestObjectReferences;
    // private polyglotContextReceiver: Object;
    // private weakThis: WeakReference<GuestContext>;
    asWeakReference(): WeakReference<GuestContext>;
    dispose(): void;
    getHandle(): number;
    releaseReference(handle: number): void;
    setHandle(handle: number): void;
}