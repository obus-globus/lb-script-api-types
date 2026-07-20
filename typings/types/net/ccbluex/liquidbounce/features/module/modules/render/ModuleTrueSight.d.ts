import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTrueSight$Sight } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleTrueSight$Sight.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { LivingEntityRenderState } from '../../../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
/**
 * TrueSight module
 *
 * Allows you to see invisible objects and entities.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTrueSight.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleTrueSight.kt:35}
 */
export class ModuleTrueSight extends ClientModule {
    static INSTANCE: ModuleTrueSight;
    static canRenderEntities(state: LivingEntityRenderState): boolean;
    readonly barriers: boolean;
    readonly entities: boolean;
    readonly entityColor: Color4b;
    readonly entityFeatureLayerColor: Color4b;
    // private sight: ModuleTrueSight$Sight[];
    // private /*not mapped: */ getSight(): ModuleTrueSight$Sight[];
    canRenderEntities(state: LivingEntityRenderState): boolean;
}