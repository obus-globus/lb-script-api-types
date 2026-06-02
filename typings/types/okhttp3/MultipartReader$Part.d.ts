import type { Closeable } from '../java/io/Closeable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
export class MultipartReader$Part extends Object implements Closeable {
    constructor(headers: Pair<string, string>[], body: BufferedSource)
    // private body: BufferedSource;
    /*not mapped: */ body(): BufferedSource;
    // private headers: Pair<string, string>[];
    /*not mapped: */ headers(): Pair<string, string>[];
    close(): void;
}