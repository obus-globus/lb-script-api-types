import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { AtomicLong } from '../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Bootstrap extends Object {
    static STDOUT: PrintStream;
    static bootstrapDuration: AtomicLong;
    static bootStrap(): void;
    static checkBootstrapCalled(paramlocation: () => string): void;
    static getMissingTranslations(): string[];
    static realStdoutPrintln(paramstring: string): void;
    static shutdownStdout(): void;
    static validate(): void;
    constructor()
}