import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
/**
 * This module allows the user to block with swords. This makes sense to be used on servers with ViaVersion.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSwordBlock.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSwordBlock.kt:38}
 */
export class ModuleSwordBlock extends ClientModule {
    static INSTANCE: ModuleSwordBlock;
    /**
     * Determines if the sword block animation should be applied no matter if we
     * are actually blocking.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSwordBlock.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleSwordBlock.kt:61}
     */
    static shouldAnimateSwordBlock(paramarg0: LivingEntity): boolean;
    static shouldAnimateSwordBlock(paramarg0: LivingEntity, paramarg1: ItemStack): boolean;
    // private alwaysHideShield: boolean;
    // private /*not mapped: */ getAlwaysHideShield(): boolean;
    readonly applyToThirdPersonView: boolean;
    readonly fakeOnPressing: boolean;
    readonly hideShieldSlot: boolean;
    readonly onlyVisual: boolean;
    // private packetHandler: EventHook<PacketEvent>;
    shouldAnimateSwordBlock(entity: LivingEntity, mainHandItem: ItemStack): boolean;
    shouldHideOffhand(offHandStack: ItemStack, mainHandStack: ItemStack): boolean;
}