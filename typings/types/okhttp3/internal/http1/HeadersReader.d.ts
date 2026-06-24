import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
export class HeadersReader extends Object {
    constructor(source: BufferedSource)
    // private headerLimit: number;
    readonly source: BufferedSource;
    readHeaders(): Pair<string, string>[];
    readLine(): string;
}