import type { File } from '../../../../java/io/File.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Writer } from '../../../../java/io/Writer.d.ts'
import type { CharBuffer } from '../../../../java/nio/CharBuffer.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Parser } from '../../../../org/apache/tika/parser/Parser.d.ts'
export class ParsingReader extends Reader {
    static nullReader(): Reader;
    static of(paramarg0: CharSequence): Reader;
    constructor(arg0: File)
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: string)
    constructor(arg0: Path[])
    constructor(arg0: Parser, arg1: InputStream, arg2: Metadata, arg3: ParseContext)
    constructor(arg0: Parser, arg1: InputStream, arg2: Metadata, arg3: ParseContext, arg4: Executor)
    // private context: ParseContext;
    // private metadata: Metadata;
    // private parser: Parser;
    // private reader: Reader;
    // private stream: InputStream;
    // private throwable: Throwable;
    // private writer: Writer;
    close(): void;
    read(): number;
    read(arg0: CharBuffer): number;
    read(arg0: string[]): number;
    read(arg0: string[], arg1: number, arg2: number): number;
}