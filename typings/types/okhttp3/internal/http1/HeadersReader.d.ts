import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { HeadersReader$Companion } from '../../../okhttp3/internal/http1/HeadersReader$Companion.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
export class HeadersReader extends Object {
    static Companion: HeadersReader$Companion;
    constructor(source: BufferedSource)
    // private headerLimit: number;
    readonly source: BufferedSource;
    readHeaders(): Pair<string, string>[];
    readLine(): string;
}