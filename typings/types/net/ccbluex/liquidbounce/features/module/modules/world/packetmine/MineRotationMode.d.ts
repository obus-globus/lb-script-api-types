import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt#L23 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineRotationMode.kt:23}
 */
export class MineRotationMode extends Enum<MineRotationMode> implements Tagged {
    static ALWAYS: MineRotationMode;
    static BOTH: MineRotationMode;
    static Companion: Tagged$Companion;
    static NEVER: MineRotationMode;
    static ON_START: MineRotationMode;
    static ON_STOP: MineRotationMode;
    static getEntries(): MineRotationMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): MineRotationMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    getFailProcedure(mineTarget: MineTarget): FailProcedure;
    shouldRotate(mineTarget: MineTarget): boolean;
    name(): "ON_START" | "ON_STOP" | "BOTH" | "ALWAYS" | "NEVER";
}