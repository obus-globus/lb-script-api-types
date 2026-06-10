import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClientModInitializer } from '../../../../../../../net/fabricmc/api/ClientModInitializer.d.ts'
import type { StatusBarHeightProvider } from '../../../../../../../net/fabricmc/fabric/api/client/rendering/v1/hud/StatusBarHeightProvider.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export class HudStatusBarHeightRegistryImpl extends Object implements ClientModInitializer {
    static LOGGER: Logger;
    static addLeft(paramarg0: Identifier, paramarg1: (param0: Player) => number): void;
    static addRight(paramarg0: Identifier, paramarg1: (param0: Player) => number): void;
    static getHeight(paramarg0: Identifier): number;
    constructor()
    onInitializeClient(): void;
}