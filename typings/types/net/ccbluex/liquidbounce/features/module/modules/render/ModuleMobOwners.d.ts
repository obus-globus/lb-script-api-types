import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Style } from '../../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { Entity } from '../../../../../../../net/minecraft/world/entity/Entity.d.ts'
/**
 * MobOwners module
 *
 * Shows you from which player a tamable entity or projectile belongs to.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleMobOwners.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleMobOwners.kt:42}
 */
export class ModuleMobOwners extends ClientModule {
    static INSTANCE: ModuleMobOwners;
    // private CANCELED_TEXT: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private FAILED_TEXT: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private LOADING_TEXT: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private projectiles: boolean;
    // private /*not mapped: */ getProjectiles(): boolean;
    // private uuidNameCache: Map<UUID, (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean>;
    // private getFromMojangApi(ownerId: UUID): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    getOwnerInfoText(entity: Entity | null): ((param0: (param0: number, param1: Style, param2: number) => boolean) => boolean) | null;
}