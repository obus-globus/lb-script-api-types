import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { DynamicOps } from '../../../../../com/mojang/serialization/DynamicOps.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WorldGenSettingsFix$StructureFeatureConfiguration extends Object {
    static CODEC: Codec<WorldGenSettingsFix$StructureFeatureConfiguration>;
    constructor(spacing: number, separation: number, salt: number)
    // private salt: number;
    // private separation: number;
    // private spacing: number;
    serialize<T extends Object | number | string | boolean>(ops: DynamicOps<T>): Dynamic<T>;
}