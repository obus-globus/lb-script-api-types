import type { BufferedWriter } from '../../java/io/BufferedWriter.d.ts'
import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { FilterOutputStream } from '../../java/io/FilterOutputStream.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { OutputStreamWriter } from '../../java/io/OutputStreamWriter.d.ts'
import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Formatter } from '../../java/util/Formatter.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { CharSequence } from '../../java/lang/CharSequence.d.ts'
export class PrintStream extends FilterOutputStream implements Closeable, Appendable {
    static nullOutputStream(): OutputStream;
    constructor(arg0: File)
    constructor(arg0: File, arg1: Charset)
    constructor(arg0: File, arg1: string)
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: boolean)
    constructor(arg0: OutputStream, arg1: boolean, arg2: Charset)
    constructor(arg0: OutputStream, arg1: boolean, arg2: string)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset)
    constructor(arg0: string, arg1: string)
    // private autoFlush: boolean;
    // private charOut: OutputStreamWriter;
    // private charset: Charset;
    // private closing: boolean;
    // private formatter: Formatter;
    // private textOut: BufferedWriter;
    // private trouble: boolean;
    append(arg0: string): PrintStream;
    append(arg0: CharSequence): PrintStream;
    append(arg0: CharSequence, arg1: number, arg2: number): PrintStream;
    charset(): Charset;
    checkError(): boolean;
    clearError(): void;
    close(): void;
    // private ensureOpen(): void;
    flush(): void;
    format(arg0: Locale, arg1: string, arg2: Object[]): PrintStream;
    format(arg0: string, arg1: Object[]): PrintStream;
    // private newLine(): void;
    print(arg0: Object): void;
    print(arg0: boolean): void;
    print(arg0: string): void;
    print(arg0: string[]): void;
    print(arg0: number): void;
    printf(arg0: Locale, arg1: string, arg2: Object[]): PrintStream;
    printf(arg0: string, arg1: Object[]): PrintStream;
    println(): void;
    println(arg0: Object): void;
    println(arg0: boolean): void;
    println(arg0: string): void;
    println(arg0: string[]): void;
    println(arg0: number): void;
    setError(): void;
    write(arg0: number[]): void;
    write(arg0: number[], arg1: number, arg2: number): void;
    // private write(arg0: string[]): void;
    write(arg0: number): void;
    // private write(arg0: string): void;
    writeBytes(arg0: number[]): void;
    // private writeln(arg0: string[]): void;
    // private writeln(arg0: string): void;
}