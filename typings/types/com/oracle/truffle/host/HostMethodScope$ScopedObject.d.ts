import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Message } from '../../../../com/oracle/truffle/api/library/Message.d.ts'
import type { ReflectionLibrary } from '../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { HostMethodScope } from '../../../../com/oracle/truffle/host/HostMethodScope.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HostMethodScope$ScopedObject extends Object implements TruffleObject {
    constructor(scope: HostMethodScope, delegate: Object, index: number)
    // private delegate: Object;
    // private index: number;
    // private scope: HostMethodScope;
    pin(): void;
    release(): void;
    send(message: Message, args: Object[], node: Node, library: ReflectionLibrary, seenError: InlinedBranchProfile, seenOther: InlinedBranchProfile): Object;
    unwrapForGuest(): Object;
}