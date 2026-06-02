import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { LoggedPrintStream } from '../../../net/minecraft/server/LoggedPrintStream.d.ts'
export class DebugLoggedPrintStream extends LoggedPrintStream {
    static nullOutputStream(): OutputStream;
    constructor(name: string, out: OutputStream)
    logLine(out: string): void;
}