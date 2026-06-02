import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { ChainedJsonException$Entry } from '../../../net/minecraft/server/ChainedJsonException$Entry.d.ts'
export class ChainedJsonException extends IOException {
    static forException(parame: Exception): ChainedJsonException;
    constructor(message: string)
    constructor(message: string, cause: Throwable)
    // private entries: ChainedJsonException$Entry[];
    readonly message: string;
    readonly message: string | null;
    prependJsonKey(key: string): void;
    setFilenameAndFlush(filename: string): void;
}