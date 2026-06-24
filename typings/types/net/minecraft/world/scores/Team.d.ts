import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Team$CollisionRule } from '../../../../net/minecraft/world/scores/Team$CollisionRule.d.ts'
import type { Team$Visibility } from '../../../../net/minecraft/world/scores/Team$Visibility.d.ts'
import type { TeamColor } from '../../../../net/minecraft/world/scores/TeamColor.d.ts'
export abstract class Team extends Object {
    constructor()
    canSeeFriendlyInvisibles(): boolean;
    getCollisionRule(): Team$CollisionRule;
    getColor(): Optional<TeamColor>;
    getDeathMessageVisibility(): Team$Visibility;
    getFormattedName(teamMemberName: Component): MutableComponent;
    getName(): string;
    getNameTagVisibility(): Team$Visibility;
    getPlayers(): string[];
    isAlliedTo(other: Team): boolean;
    isAllowFriendlyFire(): boolean;
}