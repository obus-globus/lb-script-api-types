import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class TerrainAdjustment extends Enum<TerrainAdjustment> implements StringRepresentable {
    static BEARD_BOX: TerrainAdjustment;
    static BEARD_THIN: TerrainAdjustment;
    static BURY: TerrainAdjustment;
    static CODEC: Codec<TerrainAdjustment>;
    static ENCAPSULATE: TerrainAdjustment;
    static NONE: TerrainAdjustment;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TerrainAdjustment;
    static values(): TerrainAdjustment[];
    private constructor(id: string)
    // private id: string;
    getSerializedName(): string;
    name(): "NONE" | "BURY" | "BEARD_THIN" | "BEARD_BOX" | "ENCAPSULATE";
}