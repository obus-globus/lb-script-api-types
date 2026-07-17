import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class LiquidSettings extends Enum<LiquidSettings> implements StringRepresentable {
    static APPLY_WATERLOGGING: LiquidSettings;
    static CODEC: Codec<LiquidSettings>;
    static IGNORE_WATERLOGGING: LiquidSettings;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LiquidSettings;
    static values(): LiquidSettings[];
    private constructor(name: string)
    // private name: string;
    getSerializedName(): string;
    name(): "IGNORE_WATERLOGGING" | "APPLY_WATERLOGGING";
}