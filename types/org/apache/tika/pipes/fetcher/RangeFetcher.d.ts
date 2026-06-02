import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { Fetcher } from '../../../../../org/apache/tika/pipes/fetcher/Fetcher.d.ts'
export interface RangeFetcher extends Object, Fetcher{
    fetch(arg0: string, arg1: number, arg2: number, arg3: Metadata): InputStream;
    fetch(arg0: string, arg1: number, arg2: number, arg3: Metadata, arg4: ParseContext): InputStream;
}