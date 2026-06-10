import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
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
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): PredictMode;
    static values(): (Object | null)[];
    private constructor(tag: string, predict: (param0: LivingEntity, param1: Vec3, param2: number) => Vec3)
    readonly predict: (param0: LivingEntity, param1: Vec3, param2: number) => Vec3;
    readonly tag: string;
    name(): "SIMPLE" | "WITH_GRAVITY";
}