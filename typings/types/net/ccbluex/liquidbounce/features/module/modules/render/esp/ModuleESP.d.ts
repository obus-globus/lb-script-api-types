import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { EspMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/esp/modes/EspMode.d.ts'
import type { GenericColorMode } from '../../../../../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { Color4b } from '../../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * ESP module
 *
 * Allows you to see targets through walls.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/esp/ModuleESP.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/esp/ModuleESP.kt:45}
 */
export class ModuleESP extends ClientModule {
    static INSTANCE: ModuleESP;
    readonly baseKey: string;
    // private colorModes: ModeValueGroup<GenericColorMode<LivingEntity>>;
    // private friendColor: Color4b;
    // private /*not mapped: */ getFriendColor(): Color4b;
    // private invisibleColor: Color4b;
    // private /*not mapped: */ getInvisibleColor(): Color4b;
    // private maximumDistance: number;
    /*not mapped: */ getMaximumDistance$net_ccbluex_liquidbounce(): number;
    readonly modes: ModeValueGroup<EspMode>;
    getColor(entity: LivingEntity): Color4b;
    onDisabled(): void;
    onEnabled(): void;
    /**
     * Check if the entity requires true sight to be shown with the current ESP mode
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/esp/ModuleESP.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/esp/ModuleESP.kt:102}
     */
    requiresTrueSight(entity: LivingEntity): boolean;
}