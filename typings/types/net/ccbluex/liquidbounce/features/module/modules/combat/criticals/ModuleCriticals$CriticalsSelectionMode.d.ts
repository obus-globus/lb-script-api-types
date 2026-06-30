import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Clicker } from '../../../../../../../../net/ccbluex/liquidbounce/utils/clicking/Clicker.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * The Criticals selection mode
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt#L160 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/ModuleCriticals.kt:160}
 */
export class ModuleCriticals$CriticalsSelectionMode extends Enum<ModuleCriticals$CriticalsSelectionMode> implements Tagged {
    static ALWAYS: ModuleCriticals$CriticalsSelectionMode;
    static Companion: Tagged$Companion;
    static IGNORE: ModuleCriticals$CriticalsSelectionMode;
    static SMART: ModuleCriticals$CriticalsSelectionMode;
    static getEntries(): ModuleCriticals$CriticalsSelectionMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleCriticals$CriticalsSelectionMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    isCriticalHit(target: Entity): boolean;
    shouldStopSprinting(clicker: Clicker<any>, target: Entity | null): boolean;
    name(): "SMART" | "IGNORE" | "ALWAYS";
}