import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class VillagerMetadataSection$Hat extends Enum<VillagerMetadataSection$Hat> implements StringRepresentable {
    static CODEC: Codec<VillagerMetadataSection$Hat>;
    static FULL: VillagerMetadataSection$Hat;
    static NONE: VillagerMetadataSection$Hat;
    static PARTIAL: VillagerMetadataSection$Hat;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): VillagerMetadataSection$Hat;
    static values(): VillagerMetadataSection$Hat[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "NONE" | "PARTIAL" | "FULL";
}