import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { TemporaryResources } from '../../../../org/apache/tika/io/TemporaryResources.d.ts'
import type { RenderResult } from '../../../../org/apache/tika/renderer/RenderResult.d.ts'
import type { RenderResults } from '../../../../org/apache/tika/renderer/RenderResults.d.ts'
export class PageBasedRenderResults extends RenderResults {
    constructor(arg0: TemporaryResources)
    results: JavaMap<number, RenderResult[]>;
    add(arg0: RenderResult): void;
    getPage(arg0: number): RenderResult[];
}