import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelTemplate } from '../../../../../net/minecraft/client/data/models/model/ModelTemplate.d.ts'
export class BlockModelGenerators$BookSlotModelCacheKey extends Record {
    private constructor(template: ModelTemplate, modelSuffix: string)
    // private modelSuffix: string;
    // private template: ModelTemplate;
    equals(o: Object | null): boolean;
    hashCode(): number;
    modelSuffix(): string;
    template(): ModelTemplate;
    toString(): string;
}