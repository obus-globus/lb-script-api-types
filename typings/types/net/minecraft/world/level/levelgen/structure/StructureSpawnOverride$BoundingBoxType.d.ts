import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class StructureSpawnOverride$BoundingBoxType extends Enum<StructureSpawnOverride$BoundingBoxType> implements StringRepresentable {
    static CODEC: Codec<StructureSpawnOverride$BoundingBoxType>;
    static PIECE: StructureSpawnOverride$BoundingBoxType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STRUCTURE: StructureSpawnOverride$BoundingBoxType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): StructureSpawnOverride$BoundingBoxType;
    static values(): StructureSpawnOverride$BoundingBoxType[];
    private constructor(id: string)
    // private id: string;
    getSerializedName(): string;
    name(): "PIECE" | "STRUCTURE";
}