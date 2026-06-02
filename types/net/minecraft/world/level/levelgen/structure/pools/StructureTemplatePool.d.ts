import type { Pair } from '../../../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { StructurePoolElement } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructurePoolElement.d.ts'
import type { StructureTemplatePool$Projection } from '../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool$Projection.d.ts'
import type { StructureTemplateManager } from '../../../../../../../net/minecraft/world/level/levelgen/structure/templatesystem/StructureTemplateManager.d.ts'
export class StructureTemplatePool extends Object {
    static CODEC: Codec<Object>;
    static DIRECT_CODEC: Codec<StructureTemplatePool>;
    constructor(fallback: Holder<StructureTemplatePool>, templates: Pair<(param0: StructureTemplatePool$Projection) => StructurePoolElement, number>[], projection: StructureTemplatePool$Projection)
    constructor(fallback: Holder<StructureTemplatePool>, templates: Pair<StructurePoolElement, number>[])
    readonly fallback: Holder<StructureTemplatePool>;
    // private maxSize: number;
    // private rawTemplates: Pair<StructurePoolElement, number>[];
    readonly templates: StructurePoolElement[];
    getFallback(): Holder<StructureTemplatePool>;
    getMaxSize(manager: StructureTemplateManager): number;
    getRandomTemplate(random: RandomSource): StructurePoolElement;
    getShuffledTemplates(random: RandomSource): StructurePoolElement[];
    getTemplates(): Pair<StructurePoolElement, number>[];
    size(): number;
}