import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
export class FabricGameRuleType extends Enum<FabricGameRuleType> implements StringRepresentable {
    static DOUBLE: FabricGameRuleType;
    static ENUM: FabricGameRuleType;
    static PRE_BUILT_MAP_THRESHOLD: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): FabricGameRuleType;
    static values(): FabricGameRuleType[];
    private constructor(arg2: string)
    // private name: string;
    getSerializedName(): string;
    name(): "DOUBLE" | "ENUM";
}