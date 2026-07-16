import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PredictMode extends Enum<PredictMode> implements Tagged {
    static Companion: Tagged$Companion;
    static SIMPLE: PredictMode;
    static WITH_GRAVITY: PredictMode;
    static getEntries(): PredictMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): PredictMode;
    static values(): PredictMode[];
    private constructor(tag: string, predict: (param0: LivingEntity, param1: Vec3, param2: number) => Vec3)
    readonly predict: (param0: LivingEntity, param1: Vec3, param2: number) => Vec3;
    readonly tag: string;
    name(): "SIMPLE" | "WITH_GRAVITY";
}