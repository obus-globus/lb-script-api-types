import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
export interface Fetcher extends Object{
    fetch(arg0: string, arg1: Metadata, arg2: ParseContext): InputStream;
    getName(): string;
}