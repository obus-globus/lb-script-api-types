import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Metadata } from '../../../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { ParseContext } from '../../../../../../org/apache/tika/parser/ParseContext.d.ts'
import type { AbstractFetcher } from '../../../../../../org/apache/tika/pipes/fetcher/AbstractFetcher.d.ts'
export class UrlFetcher extends AbstractFetcher {
    constructor()
    fetch(arg0: string, arg1: Metadata, arg2: ParseContext): InputStream;
}