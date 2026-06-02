import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerPlayer } from '../../../../net/minecraft/server/level/ServerPlayer.d.ts'
import type { ItemCooldowns } from '../../../../net/minecraft/world/item/ItemCooldowns.d.ts'
export class ServerItemCooldowns extends ItemCooldowns {
    constructor(player: ServerPlayer)
    // private player: ServerPlayer;
    onCooldownEnded(cooldownGroup: Identifier): void;
    onCooldownStarted(cooldownGroup: Identifier, duration: number): void;
}