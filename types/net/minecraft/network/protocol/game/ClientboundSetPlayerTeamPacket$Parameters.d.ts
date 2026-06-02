import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../../net/minecraft/ChatFormatting.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PlayerTeam } from '../../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
import type { Team$CollisionRule } from '../../../../../net/minecraft/world/scores/Team$CollisionRule.d.ts'
import type { Team$Visibility } from '../../../../../net/minecraft/world/scores/Team$Visibility.d.ts'
export class ClientboundSetPlayerTeamPacket$Parameters extends Object {
    constructor(input: RegistryFriendlyByteBuf)
    constructor(team: PlayerTeam)
    readonly collisionRule: Team$CollisionRule;
    readonly color: ChatFormatting;
    readonly displayName: Component;
    readonly nametagVisibility: Team$Visibility;
    readonly options: number;
    readonly playerPrefix: Component;
    readonly playerSuffix: Component;
    getCollisionRule(): Team$CollisionRule;
    getColor(): ChatFormatting;
    getDisplayName(): Component;
    getNametagVisibility(): Team$Visibility;
    getOptions(): number;
    getPlayerPrefix(): Component;
    getPlayerSuffix(): Component;
    write(output: RegistryFriendlyByteBuf): void;
}