import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { PlayerTeam } from '../../../../../net/minecraft/world/scores/PlayerTeam.d.ts'
import type { Team$CollisionRule } from '../../../../../net/minecraft/world/scores/Team$CollisionRule.d.ts'
import type { Team$Visibility } from '../../../../../net/minecraft/world/scores/Team$Visibility.d.ts'
import type { TeamColor } from '../../../../../net/minecraft/world/scores/TeamColor.d.ts'
export class ClientboundSetPlayerTeamPacket$Parameters extends Record {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundSetPlayerTeamPacket$Parameters>;
    constructor(displayName: Component, playerPrefix: Component, playerSuffix: Component, nameTagVisibility: Team$Visibility, collisionRule: Team$CollisionRule, color: Optional<TeamColor>, options: number)
    constructor(team: PlayerTeam)
    // private collisionRule: Team$CollisionRule;
    // private color: Optional<TeamColor>;
    // private displayName: Component;
    // private nameTagVisibility: Team$Visibility;
    // private options: number;
    // private playerPrefix: Component;
    // private playerSuffix: Component;
    collisionRule(): Team$CollisionRule;
    color(): Optional<TeamColor>;
    displayName(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nameTagVisibility(): Team$Visibility;
    options(): number;
    playerPrefix(): Component;
    playerSuffix(): Component;
    toString(): string;
}