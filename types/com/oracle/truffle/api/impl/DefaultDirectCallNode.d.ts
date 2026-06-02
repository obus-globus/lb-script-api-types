import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { DirectCallNode } from '../../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultDirectCallNode extends DirectCallNode {
    static create(paramtarget: CallTarget): DirectCallNode;
    constructor(target: CallTarget)
    readonly inliningForced: boolean;
    call(arguments: Object[]): Object;
    cloneCallTarget(): boolean;
    forceInlining(): void;
    getClonedCallTarget(): CallTarget;
    isCallTargetCloningAllowed(): boolean;
    isInlinable(): boolean;
    isInliningForced(): boolean;
}