import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CrashReport } from '../../../../net/minecraft/CrashReport.d.ts'
import type { DedicatedServer } from '../../../../net/minecraft/server/dedicated/DedicatedServer.d.ts'
export class ServerWatchdog extends Object implements Runnable {
    static createWatchdogCrashReport(parammessage: string, parammainThreadId: number): CrashReport;
    constructor(server: DedicatedServer)
    // private maxTickTimeNanos: number;
    // private server: DedicatedServer;
    // private exit(): void;
    run(): void;
}