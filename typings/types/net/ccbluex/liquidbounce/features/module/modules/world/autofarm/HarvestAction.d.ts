import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class HarvestAction extends Enum<HarvestAction> {
    /**
     * Break the block to harvest it. e.g. Melon, Pumpkin, Cactus
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L57 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:57}
     */
    static BREAK: HarvestAction;
    /**
     * Use the item in hand to harvest the block. e.g. Sweet Berry Bush
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmHelper.kt:61}
     */
    static USE: HarvestAction;
    static getEntries(): HarvestAction[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): HarvestAction;
    static values(): (Object | null)[];
    private constructor()
    name(): "BREAK" | "USE";
}