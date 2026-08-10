import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleMobOwners.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleMobOwners.kt:43}
 */
export class ModuleMobOwners extends ClientModule {
    static INSTANCE: ModuleMobOwners;
    // private CANCELED_TEXT: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private FAILED_TEXT: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private LOADING_TEXT: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    // private projectiles: boolean;
    // private /*not mapped: */ getProjectiles(): boolean;
    // private uuidNameCache: JavaMap<UUID, (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean>;
    // private getFromMojangApi(ownerId: UUID): (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean;
    getOwnerInfoText(entity: Entity | null): ((param0: (param0: number, param1: Style, param2: number) => boolean) => boolean) | null;
}