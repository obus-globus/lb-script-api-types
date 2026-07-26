import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Clicker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * The Criticals selection mode
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/21564b1e592881f9ec5cd94857232312a84039b2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt#L160 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt:160}
 */
export class ModuleCriticals$CriticalsSelectionMode extends Enum<ModuleCriticals$CriticalsSelectionMode> implements Tagged {
    static ALWAYS: ModuleCriticals$CriticalsSelectionMode;
    static Companion: Tagged$Companion;
    static IGNORE: ModuleCriticals$CriticalsSelectionMode;
    static SMART: ModuleCriticals$CriticalsSelectionMode;
    static getEntries(): ModuleCriticals$CriticalsSelectionMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleCriticals$CriticalsSelectionMode;
    static values(): ModuleCriticals$CriticalsSelectionMode[];
    private constructor(tag: string)
    readonly tag: string;
    isCriticalHit(target: Entity): boolean;
    shouldStopSprinting(clicker: Clicker<any>, target: Entity | null): boolean;
    name(): "SMART" | "IGNORE" | "ALWAYS";
}