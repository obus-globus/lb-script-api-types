import type { Closeable } from '../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TemporaryResources } from '../../../../org/apache/tika/io/TemporaryResources.d.ts'
import type { RenderResult } from '../../../../org/apache/tika/renderer/RenderResult.d.ts'
export class RenderResults extends Object implements Closeable {
    constructor(arg0: TemporaryResources)
    readonly results: RenderResult[];
    // private tmp: TemporaryResources;
    add(arg0: RenderResult): void;
    close(): void;
    getResults(): RenderResult[];
}