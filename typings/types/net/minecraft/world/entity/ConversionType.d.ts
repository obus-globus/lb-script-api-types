import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { ConversionParams } from '../../../../net/minecraft/world/entity/ConversionParams.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
export class ConversionType extends Enum<ConversionType> {
    static SINGLE: ConversionType;
    static SPLIT_ON_DEATH: ConversionType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ConversionType;
    static values(): ConversionType[];
    private constructor(discardAfterConversion: boolean)
    // private discardAfterConversion: boolean;
    convert(from: Mob, to: Mob, params: ConversionParams): void;
    shouldDiscardAfterConversion(): boolean;
    name(): "SINGLE" | "SPLIT_ON_DEATH";
}