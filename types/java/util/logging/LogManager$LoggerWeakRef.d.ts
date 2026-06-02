import type { WeakReference } from '../../../java/lang/ref/WeakReference.d.ts'
import type { LogManager$LogNode } from '../../../java/util/logging/LogManager$LogNode.d.ts'
import type { Logger } from '../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LogManager$LoggerWeakRef extends WeakReference<Logger> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(null_: LogManager$LoggerWeakRef, arg1: Logger)
    // private disposed: boolean;
    // private name: string;
    // private node: LogManager$LogNode;
    // private parentRef: WeakReference<Logger>;
    dispose(): void;
    setNode(arg0: LogManager$LogNode): void;
    setParentRef(arg0: WeakReference<Logger>): void;
}