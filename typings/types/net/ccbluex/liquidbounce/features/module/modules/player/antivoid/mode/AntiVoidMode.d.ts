import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class AntiVoidMode extends Mode {
    static Companion: Tagged$Companion;
    constructor(name: string)
    /*not mapped: */ isExempt(): boolean;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    discoverRescuePosition(): Vec3 | null;
    /**
     * Attempt to safely move the player to a safe location.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidMode.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/antivoid/mode/AntiVoidMode.kt:46}
     */
    rescue(): boolean;
}