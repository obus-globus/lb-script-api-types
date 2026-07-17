import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../net/minecraft/util/StringRepresentable.d.ts'
export class DatapackStructureReport$Format extends Enum<DatapackStructureReport$Format> implements StringRepresentable {
    static CODEC: Codec<DatapackStructureReport$Format>;
    static MCFUNCTION: DatapackStructureReport$Format;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static STRUCTURE: DatapackStructureReport$Format;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DatapackStructureReport$Format;
    static values(): DatapackStructureReport$Format[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "STRUCTURE" | "MCFUNCTION";
}