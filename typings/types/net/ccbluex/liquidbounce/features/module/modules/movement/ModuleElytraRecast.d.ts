import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Elytra recast module
 *
 * Recasts elytra when holding the jump key
 *
 * @author Pivo1lovv
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt:29}
 */
export class ModuleElytraRecast extends ClientModule {
    static INSTANCE: ModuleElytraRecast;
    // private /*not mapped: */ getShouldRecast(): boolean;
    /**
     * Recast elytra when {@link shouldRecast} says it should
     *
     * @returns true if elytra was recast
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleElytraRecast.kt:47}
     */
    recastElytra(): boolean;
}