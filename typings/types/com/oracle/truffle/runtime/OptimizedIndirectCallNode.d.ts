import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { IndirectCallNode } from '../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class OptimizedIndirectCallNode extends IndirectCallNode {
    static create(): IndirectCallNode;
    static getUncached(): IndirectCallNode;
    constructor()
    // private exceptionProfile: Class<Throwable>;
    call(target: CallTarget, arguments: Object[]): Object;
    // private handleException(t: Throwable): RuntimeException;
    // private profileExceptionType<T extends Throwable>(value: T): T;
}