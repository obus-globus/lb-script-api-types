import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { FailProcedure } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/FailProcedure.d.ts'
import type { MineTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
/**
 * Determines how rotating is handled.
 *
 * Also provides procedures for when we can't look at the target position.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:29}
 */
export class MineRotationMode extends Enum<MineRotationMode> implements Tagged {
    static ALWAYS: MineRotationMode;
    static BOTH: MineRotationMode;
    static Companion: Tagged$Companion;
    static NEVER: MineRotationMode;
    static ON_START: MineRotationMode;
    static ON_STOP: MineRotationMode;
    static getEntries(): MineRotationMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MineRotationMode;
    static values(): MineRotationMode[];
    private constructor(tag: string)
    readonly tag: string;
    getFailProcedure(mineTarget: MineTarget): FailProcedure;
    shouldRotate(mineTarget: MineTarget): boolean;
    name(): "ON_START" | "ON_STOP" | "BOTH" | "ALWAYS" | "NEVER";
}