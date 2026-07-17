import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TargetRotatePosition extends Enum<TargetRotatePosition> implements Tagged {
    static CENTER: TargetRotatePosition;
    static Companion: Tagged$Companion;
    static EYES: TargetRotatePosition;
    static getEntries(): TargetRotatePosition[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): TargetRotatePosition;
    static values(): TargetRotatePosition[];
    private constructor(tag: string, position: (param0: LivingEntity) => Vec3)
    readonly position: (param0: LivingEntity) => Vec3;
    readonly tag: string;
    name(): "EYES" | "CENTER";
}