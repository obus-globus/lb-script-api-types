import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Team$CollisionRule } from '../../../../net/minecraft/world/scores/Team$CollisionRule.d.ts'
import type { Team$Visibility } from '../../../../net/minecraft/world/scores/Team$Visibility.d.ts'
export abstract class Team extends Object {
    constructor()
    canSeeFriendlyInvisibles(): boolean;
    getCollisionRule(): Team$CollisionRule;
    getColor(): ChatFormatting;
    getDeathMessageVisibility(): Team$Visibility;
    getFormattedName(teamMemberName: Component): MutableComponent;
    getName(): string;
    getNameTagVisibility(): Team$Visibility;
    getPlayers(): E[];
    isAlliedTo(other: Team): boolean;
    isAllowFriendlyFire(): boolean;
}