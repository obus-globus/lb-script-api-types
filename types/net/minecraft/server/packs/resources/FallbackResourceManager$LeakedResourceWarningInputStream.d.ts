import type { FilterInputStream } from '../../../../../java/io/FilterInputStream.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class FallbackResourceManager$LeakedResourceWarningInputStream extends FilterInputStream {
    static nullInputStream(): InputStream;
    constructor(wrapped: InputStream, location: Identifier, name: string)
    // private closed: boolean;
    // private message: () => string;
    close(): void;
    finalize(): void;
}