import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { DirectCallNode } from '../../../../com/oracle/truffle/api/nodes/DirectCallNode.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class OptimizedDirectCallNode extends DirectCallNode {
    static create(paramtarget: CallTarget): DirectCallNode;
    constructor(target: OptimizedCallTarget)
    readonly callCount: number;
    readonly currentCallTarget: OptimizedCallTarget;
    // private exceptionProfile: Class<Throwable>;
    readonly inliningForced: boolean;
    // private splitDecided: boolean;
    call(...arguments: Object[]): Object;
    cloneCallTarget(): boolean;
    forceInlining(): void;
    getCallCount(): number;
    getCallTarget(): OptimizedCallTarget;
    getClonedCallTarget(): OptimizedCallTarget;
    getCurrentCallTarget(): OptimizedCallTarget;
    getKnownCallSiteCount(): number;
    // private handleException(t: Throwable): RuntimeException;
    // private incrementCallCount(): void;
    isCallTargetCloningAllowed(): boolean;
    isInlinable(): boolean;
    isInliningForced(): boolean;
    // private onInterpreterCall(target: OptimizedCallTarget): OptimizedCallTarget;
    // private profileExceptionType<T extends Throwable>(value: T): T;
    split(): void;
}