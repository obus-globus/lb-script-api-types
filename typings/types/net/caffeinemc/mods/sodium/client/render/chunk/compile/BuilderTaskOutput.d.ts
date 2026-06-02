import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { RenderSection } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/RenderSection.d.ts'
export abstract class BuilderTaskOutput extends Object {
    constructor(arg0: RenderSection, arg1: number)
    render: RenderSection;
    readonly resultSize: number;
    submitTime: number;
    calculateResultSize(): number;
    destroy(): void;
    getResultSize(): number;
}