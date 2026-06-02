import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TemporaryResources } from '../../../../org/apache/tika/io/TemporaryResources.d.ts'
import type { Metadata } from '../../../../org/apache/tika/metadata/Metadata.d.ts'
import type { RenderResult$STATUS } from '../../../../org/apache/tika/renderer/RenderResult$STATUS.d.ts'
export class RenderResult extends Object implements Closeable {
    constructor(arg0: RenderResult$STATUS, arg1: number, arg2: Object, arg3: Metadata)
    readonly id: number;
    readonly metadata: Metadata;
    // private result: Object;
    readonly status: RenderResult$STATUS;
    // private tmp: TemporaryResources;
    close(): void;
    getId(): number;
    getInputStream(): InputStream;
    getMetadata(): Metadata;
    getStatus(): RenderResult$STATUS;
}