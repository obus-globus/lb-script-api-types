import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityTargetClassification } from '../../../../../net/ccbluex/liquidbounce/utils/combat/EntityTargetClassification.d.ts'
import type { EntityTargetingInfo$Companion } from '../../../../../net/ccbluex/liquidbounce/utils/combat/EntityTargetingInfo$Companion.d.ts'
/**
 * Global target configurable
 *
 * Modules can have their own enemy configurable if required. If not, they should use this as default.
 * Global enemy configurable can be used to configure which entities should be considered as a target.
 *
 * This can be adjusted by the .target command and the panel inside the ClickGUI.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt#L76 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/CombatExtensions.kt:76}
 */
export class EntityTargetingInfo extends Object {
    static Companion: EntityTargetingInfo$Companion;
    static DEFAULT: EntityTargetingInfo;
    constructor(classification: EntityTargetClassification, isFriend: boolean)
    readonly classification: EntityTargetClassification;
    // private isFriend: boolean;
    /*not mapped: */ isFriend(): boolean;
    component1(): EntityTargetClassification;
    component2(): boolean;
    copy(classification: EntityTargetClassification, isFriend: boolean): EntityTargetingInfo;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}