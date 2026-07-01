import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { File } from '../../java/io/File.d.ts'
import type { Flushable } from '../../java/io/Flushable.d.ts'
import type { IOException } from '../../java/io/IOException.d.ts'
import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { PrintStream } from '../../java/io/PrintStream.d.ts'
import type { Appendable } from '../../java/lang/Appendable.d.ts'
import type { Charset } from '../../java/nio/charset/Charset.d.ts'
import type { Locale } from '../../java/util/Locale.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Formatter extends Object implements Closeable, Flushable {
    constructor()
    constructor(arg0: File)
    constructor(arg0: File, arg1: Charset, arg2: Locale)
    constructor(arg0: File, arg1: string)
    constructor(arg0: File, arg1: string, arg2: Locale)
    constructor(arg0: OutputStream)
    constructor(arg0: OutputStream, arg1: Charset, arg2: Locale)
    constructor(arg0: OutputStream, arg1: string)
    constructor(arg0: OutputStream, arg1: string, arg2: Locale)
    constructor(arg0: PrintStream)
    constructor(arg0: Appendable)
    constructor(arg0: Appendable, arg1: Locale)
    constructor(arg0: Locale)
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset, arg2: Locale)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Locale)
    // private a: Appendable;
    // private l: Locale;
    // private lastException: IOException;
    close(): void;
    // private ensureOpen(): void;
    flush(): void;
    format(arg0: Locale, arg1: string, arg2: Object[]): Formatter;
    format(arg0: string, arg1: Object[]): Formatter;
    ioException(): IOException;
    locale(): Locale;
    out(): Appendable;
    toString(): string;
}