import type { HolderSet } from '../../../../../com/viaversion/viaversion/api/minecraft/HolderSet.d.ts'
import type { HolderType } from '../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AnimalVariant extends Record {
    static TYPE: HolderType<AnimalVariant>;
    constructor(modelType: number, texture: string, biomes: HolderSet)
    // private biomes: HolderSet;
    // private modelType: number;
    // private texture: string;
    biomes(): HolderSet;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    modelType(): number;
    texture(): string;
    toString(): string;
}