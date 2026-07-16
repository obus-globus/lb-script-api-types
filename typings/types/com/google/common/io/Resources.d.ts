import type { ByteSource } from '../../../../com/google/common/io/ByteSource.d.ts'
import type { CharSource } from '../../../../com/google/common/io/CharSource.d.ts'
import type { LineProcessor } from '../../../../com/google/common/io/LineProcessor.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Charset } from '../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Resources extends Object {
    static asByteSource(paramurl: URL): ByteSource;
    static asCharSource(paramurl: URL, paramcharset: Charset): CharSource;
    static copy(paramfrom: URL, paramto: OutputStream): void;
    static getResource(paramcontextClass: Class<Object>, paramresourceName: string): URL;
    static getResource(paramresourceName: string): URL;
    static readLines<T extends unknown>(paramurl: URL, paramcharset: Charset, paramcallback: LineProcessor<T>): T;
    static readLines(paramurl: URL, paramcharset: Charset): string[];
    static toByteArray(paramurl: URL): number[];
    static toString(paramurl: URL, paramcharset: Charset): string;
    private constructor()
}