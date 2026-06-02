import type { BufferedReader } from '../../java/io/BufferedReader.d.ts'
import type { BufferedWriter } from '../../java/io/BufferedWriter.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { ProcessHandle } from '../../java/lang/ProcessHandle.d.ts'
import type { ProcessHandle$Info } from '../../java/lang/ProcessHandle$Info.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Duration } from '../../java/time/Duration.d.ts'
import type { CompletableFuture } from '../../java/util/concurrent/CompletableFuture.d.ts'
import type { TimeUnit } from '../../java/util/concurrent/TimeUnit.d.ts'
import type { Stream } from '../../java/util/stream/Stream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class Process extends Object {
    constructor()
    // private errorCharset: Charset;
    // private errorReader: BufferedReader;
    // private inputCharset: Charset;
    // private inputReader: BufferedReader;
    // private outputCharset: Charset;
    // private outputWriter: BufferedWriter;
    children(): Stream<ProcessHandle>;
    descendants(): Stream<ProcessHandle>;
    destroy(): void;
    destroyForcibly(): Process;
    errorReader(): BufferedReader;
    errorReader(arg0: Charset): BufferedReader;
    exitValue(): number;
    getErrorStream(): InputStream;
    getInputStream(): InputStream;
    getOutputStream(): OutputStream;
    // private hasExited(): boolean;
    info(): ProcessHandle$Info;
    inputReader(): BufferedReader;
    inputReader(arg0: Charset): BufferedReader;
    isAlive(): boolean;
    onExit(): CompletableFuture<Process>;
    outputWriter(): BufferedWriter;
    outputWriter(arg0: Charset): BufferedWriter;
    pid(): number;
    supportsNormalTermination(): boolean;
    toHandle(): ProcessHandle;
    waitFor(): number;
    waitFor(arg0: Duration): boolean;
    waitFor(arg0: number, arg1: TimeUnit): boolean;
    // private waitForInternal(): Process;
}