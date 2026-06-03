import type { PolyglotLanguageContext } from '../../../../com/oracle/truffle/polyglot/PolyglotLanguageContext.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Process } from '../../../../java/lang/Process.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
export class ProcessHandlers$ProcessDecorator extends Process {
    private constructor(owner: PolyglotLanguageContext, command: string, delegate: Process, out: OutputStream, err: OutputStream)
    // private command: string;
    // private delegate: Process;
    // private errCopier: Thread;
    // private outCopier: Thread;
    // private owner: Reference<PolyglotLanguageContext>;
    destroy(): void;
    destroyForcibly(): Process;
    exitValue(): number;
    getCommand(): string;
    getErrorStream(): InputStream;
    getInputStream(): InputStream;
    getOutputStream(): OutputStream;
    getOwner(): PolyglotLanguageContext;
    isAlive(): boolean;
    // private removeFromActiveSubProcesses(): void;
    waitFor(): number;
    waitFor(arg0: Duration): boolean;
    waitFor(timeout: number, unit: TimeUnit): boolean;
    // private waitForCopiers(): void;
}