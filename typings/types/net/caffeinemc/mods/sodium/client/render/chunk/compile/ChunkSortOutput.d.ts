import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
import type { BuilderTaskOutput } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/compile/BuilderTaskOutput.d.ts'
import type { Sorter } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/data/Sorter.d.ts'
export class ChunkSortOutput extends BuilderTaskOutput {
    constructor(arg0: RenderSection, arg1: number)
    constructor(arg0: RenderSection, arg1: number, arg2: Sorter)
    // private containsNewIndexData: boolean;
    readonly sorter: Sorter;
    calculateResultSize(): number;
    containsNewIndexData(): boolean;
    destroy(): void;
    getSorter(): Sorter;
    markAsNotContainingNewIndexData(): void;
    setSorter(arg0: Sorter): void;
}