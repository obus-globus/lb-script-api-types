import type { OutputStream } from '../../../java/io/OutputStream.d.ts'
import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class LoggedPrintStream extends PrintStream {
    static nullOutputStream(): OutputStream;
    constructor(name: string, out: OutputStream)
    // private name: string;
    logLine(out: string): void;
    println(): void;
    println(object: Object): void;
    println(arg0: boolean): void;
    println(arg0: string): void;
    println(arg0: string[]): void;
    println(arg0: number): void;
    println(string: string): void;
}