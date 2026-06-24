import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { Team$CollisionRule } from '../../../../net/minecraft/world/scores/Team$CollisionRule.d.ts'
import type { Team$Visibility } from '../../../../net/minecraft/world/scores/Team$Visibility.d.ts'
import type { TeamColor } from '../../../../net/minecraft/world/scores/TeamColor.d.ts'
export class PlayerTeam$Packed extends Record {
    static CODEC: Codec<PlayerTeam$Packed>;
    constructor(name: string, displayName: Optional<Component>, color: Optional<TeamColor>, allowFriendlyFire: boolean, seeFriendlyInvisibles: boolean, memberNamePrefix: Component, memberNameSuffix: Component, nameTagVisibility: Team$Visibility, deathMessageVisibility: Team$Visibility, collisionRule: Team$CollisionRule, players: string[])
    // private allowFriendlyFire: boolean;
    // private collisionRule: Team$CollisionRule;
    // private color: Optional<TeamColor>;
    // private deathMessageVisibility: Team$Visibility;
    // private displayName: Optional<Component>;
    // private memberNamePrefix: Component;
    // private memberNameSuffix: Component;
    // private name: string;
    // private nameTagVisibility: Team$Visibility;
    // private players: string[];
    // private seeFriendlyInvisibles: boolean;
    allowFriendlyFire(): boolean;
    collisionRule(): Team$CollisionRule;
    color(): Optional<TeamColor>;
    deathMessageVisibility(): Team$Visibility;
    displayName(): Optional<Component>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    memberNamePrefix(): Component;
    memberNameSuffix(): Component;
    name(): string;
    nameTagVisibility(): Team$Visibility;
    players(): string[];
    seeFriendlyInvisibles(): boolean;
    toString(): string;
}