import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Elytra recast module
 *
 * Recasts elytra when holding the jump key
 *
 * @author Pivo1lovv
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt:36}
 */
export class ModuleElytraRecast extends ClientModule {
    static INSTANCE: ModuleElytraRecast;
    // private /*not mapped: */ getShouldRecast(): boolean;
    /**
     * Recast elytra when {@link shouldRecast} says it should
     *
     * @returns true if elytra was recast
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt:52}
     */
    recastElytra(): boolean;
}