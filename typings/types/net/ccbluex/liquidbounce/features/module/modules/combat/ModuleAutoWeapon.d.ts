import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoWeapon$ChangeOnAction } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon$ChangeOnAction.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { WeaponType } from '../../../../../../../net/ccbluex/liquidbounce/utils/item/WeaponType.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * AutoWeapon module
 *
 * Automatically selects the best weapon in your hotbar
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt:55}
 */
export class ModuleAutoWeapon extends ClientModule {
    static INSTANCE: ModuleAutoWeapon;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private autoMace: boolean;
    // private /*not mapped: */ getAutoMace(): boolean;
    // private autoShieldBreak: boolean;
    // private /*not mapped: */ getAutoShieldBreak(): boolean;
    // private /*not mapped: */ getCanMaceSmash(): boolean;
    // private changeOnActions: ModuleAutoWeapon$ChangeOnAction[];
    // private /*not mapped: */ getChangeOnActions(): ModuleAutoWeapon$ChangeOnAction[];
    // private /*not mapped: */ isBusy(): boolean;
    // private preferredWeapon: WeaponType[];
    // private /*not mapped: */ getPreferredWeapon(): WeaponType[];
    // private switchBack: number;
    // private /*not mapped: */ getSwitchBack(): number;
    /**
     * Check if the attack will mace smash
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt:112}
     */
    readonly willMaceSmash: boolean;
    /**
     * Check if the attack will break the shield
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt#L94 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt:94}
     */
    readonly willShieldBreak: boolean;
    // private determineWeaponSlot(target: LivingEntity | null, enforceShield: boolean): HotbarItemSlot | null;
    /**
     * Get the attack speed of the determined weapon, or
     * return {@link original} if no weapon is selected
     * or if {@link ChangeOnAction} does not contain {@link ChangeOnAction.ON_ATTACK}.
     *
     * When we switch our item on the same tick as we attack,
     * the cooldown progress is not updated.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt#L202 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt:202}
     */
    getAttackSpeed(original: number): number;
    onDisabled(): void;
    /**
     * Prepare AutoWeapon for given {@link entity} if {@link onTarget} is enabled
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt#L153 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleAutoWeapon.kt:153}
     */
    onTarget(entity: Entity | null): void;
}