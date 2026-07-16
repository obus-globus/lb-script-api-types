import type { WebSocketImpl } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/WebSocketImpl.d.ts'
import type { WebSocketServer } from '../../../../../../../com/oracle/truffle/tools/utils/java_websocket/server/WebSocketServer.d.ts'
import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { StackTraceElement } from '../../../../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../../../../java/lang/Thread.d.ts'
import type { Thread$Builder$OfPlatform } from '../../../../../../../java/lang/Thread$Builder$OfPlatform.d.ts'
import type { Thread$Builder$OfVirtual } from '../../../../../../../java/lang/Thread$Builder$OfVirtual.d.ts'
import type { Thread$UncaughtExceptionHandler } from '../../../../../../../java/lang/Thread$UncaughtExceptionHandler.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Duration } from '../../../../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export class WebSocketServer$WebSocketWorker extends Thread {
    static MAX_PRIORITY: number;
    static MIN_PRIORITY: number;
    static NORM_PRIORITY: number;
    static activeCount(): number;
    static currentThread(): Thread;
    static dumpStack(): void;
    static enumerate(paramarg0: Thread[]): number;
    static getAllStackTraces(): Map<Thread, StackTraceElement[]>;
    static getDefaultUncaughtExceptionHandler(): (param0: Thread, param1: Throwable) => void;
    static holdsLock(paramarg0: Object): boolean;
    static interrupted(): boolean;
    static ofPlatform(): Thread$Builder$OfPlatform;
    static ofVirtual(): Thread$Builder$OfVirtual;
    static onSpinWait(): void;
    static setDefaultUncaughtExceptionHandler(paramarg0: (param0: Thread, param1: Throwable) => void): void;
    static sleep(paramarg0: Duration): void;
    static sleep(paramarg0: number): void;
    static sleep(paramarg0: number, paramarg1: number): void;
    static startVirtualThread(paramarg0: () => void): Thread;
    static yield(): void;
    constructor(null_: WebSocketServer)
    // private iqueue: WebSocketImpl[];
    // private doDecode(arg0: WebSocketImpl, arg1: ByteBuffer): void;
    put(arg0: WebSocketImpl): void;
    run(): void;
}