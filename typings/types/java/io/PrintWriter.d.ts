import type { File } from '../../java/io/File.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { PrintStream } from '../../java/io/PrintStream.d.ts'
import type { Writer } from '../../java/io/Writer.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Formatter } from '../../java/util/Formatter.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class PrintWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: File)
    constructor(arg0: File, arg1: Charset)
    constructor(arg0: File, arg1: string)
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: Charset)
    constructor(arg0: Writer)
    constructor(arg0: Writer, arg1: Object)
    constructor(arg0: Writer, arg1: boolean)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset)
    constructor(arg0: string, arg1: string)
    // private autoFlush: boolean;
    // private formatter: Formatter;
    // private out: Writer;
    // private psOut: PrintStream;
    // private trouble: boolean;
    append(arg0: string): PrintWriter;
    append(arg0: CharSequence): PrintWriter;
    append(arg0: CharSequence, arg1: number, arg2: number): PrintWriter;
    checkError(): boolean;
    clearError(): void;
    close(): void;
    // private ensureOpen(): void;
    flush(): void;
    format(arg0: Locale, arg1: string, ...arg2: Object[]): PrintWriter;
    format(arg0: string, ...arg1: Object[]): PrintWriter;
    // private newLine(): void;
    print(arg0: Object): void;
    print(arg0: boolean): void;
    print(arg0: string): void;
    print(arg0: string[]): void;
    print(arg0: number): void;
    printf(arg0: Locale, arg1: string, ...arg2: Object[]): PrintWriter;
    printf(arg0: string, ...arg1: Object[]): PrintWriter;
    println(): void;
    println(arg0: Object): void;
    println(arg0: boolean): void;
    println(arg0: string): void;
    println(arg0: string[]): void;
    println(arg0: number): void;
    setError(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}