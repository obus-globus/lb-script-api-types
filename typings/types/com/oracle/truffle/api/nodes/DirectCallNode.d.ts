import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DirectCallNode extends Node {
    static create(paramtarget: CallTarget): DirectCallNode;
    constructor(callTarget: CallTarget)
    readonly callTarget: CallTarget;
    call(...arguments: Object[]): Object;
    cloneCallTarget(): boolean;
    forceInlining(): void;
    getCallTarget(): CallTarget;
    getClonedCallTarget(): CallTarget;
    getCurrentCallTarget(): CallTarget;
    getCurrentRootNode(): RootNode;
    isCallTargetCloned(): boolean;
    isCallTargetCloningAllowed(): boolean;
    isInlinable(): boolean;
    isInliningForced(): boolean;
    toString(): string;
}