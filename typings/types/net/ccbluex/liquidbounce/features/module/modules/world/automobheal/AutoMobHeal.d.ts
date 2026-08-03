import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { AutoMobHeal$HealTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget.d.ts'
import type { SwingMode } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { PathfinderMob } from '../../../../../../../../net/minecraft/world/entity/PathfinderMob.d.ts'
/**
 * Automatically heals nearby vanilla-healable mobs using their vanilla repair or feeding items.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt:58}
 */
export class AutoMobHeal extends ClientModule {
    static INSTANCE: AutoMobHeal;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    // private healTargets: AutoMobHeal$HealTarget<PathfinderMob>[];
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    // private repeatable: EventHook<GameTickEvent>;
    // private slotResetDelay: number;
    // private /*not mapped: */ getSlotResetDelay(): number;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private isBlockedBySecondaryUse(entity: LivingEntity): boolean;
    onDisabled(): void;
}