import type { AbstractTruffleException } from '../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HostContext } from '../../../../com/oracle/truffle/host/HostContext.d.ts'
import type { HostObject } from '../../../../com/oracle/truffle/host/HostObject.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class HostException extends AbstractTruffleException {
    static UNLIMITED_STACK_TRACE: number;
    private constructor(original: Throwable, context: HostContext, location: Node)
    // private delegate: HostObject;
    readonly message: string | null;
    // private original: Throwable;
    getOriginal(): Throwable;
    withContext(context: HostContext): HostException;
}