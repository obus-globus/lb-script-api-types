import type { ChatFormatting } from '../../../../net/minecraft/ChatFormatting.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
import type { PlayerTeam$Packed } from '../../../../net/minecraft/world/scores/PlayerTeam$Packed.d.ts'
import type { Scoreboard } from '../../../../net/minecraft/world/scores/Scoreboard.d.ts'
import type { Team } from '../../../../net/minecraft/world/scores/Team.d.ts'
import type { Team$CollisionRule } from '../../../../net/minecraft/world/scores/Team$CollisionRule.d.ts'
import type { Team$Visibility } from '../../../../net/minecraft/world/scores/Team$Visibility.d.ts'
export class PlayerTeam extends Team {
    static formatNameForTeam(paramteam: Team, paramname: Component): MutableComponent;
    constructor(scoreboard: Scoreboard, name: string)
    readonly allowFriendlyFire: boolean;
    readonly collisionRule: Team$CollisionRule;
    readonly color: ChatFormatting;
    readonly deathMessageVisibility: Team$Visibility;
    readonly displayName: Component;
    // private displayNameStyle: Style;
    readonly name: string;
    readonly nameTagVisibility: Team$Visibility;
    readonly playerPrefix: Component;
    readonly playerSuffix: Component;
    readonly players: string[];
    readonly scoreboard: Scoreboard;
    readonly seeFriendlyInvisibles: boolean;
    canSeeFriendlyInvisibles(): boolean;
    getCollisionRule(): Team$CollisionRule;
    getColor(): ChatFormatting;
    getDeathMessageVisibility(): Team$Visibility;
    getDisplayName(): Component;
    getFormattedDisplayName(): MutableComponent;
    getFormattedName(teamMemberName: Component): MutableComponent;
    getName(): string;
    getNameTagVisibility(): Team$Visibility;
    getPlayerPrefix(): Component;
    getPlayerSuffix(): Component;
    getPlayers(): E[];
    getScoreboard(): Scoreboard;
    isAllowFriendlyFire(): boolean;
    pack(): PlayerTeam$Packed;
    packOptions(): number;
    setAllowFriendlyFire(allowFriendlyFire: boolean): void;
    setCollisionRule(collisionRule: Team$CollisionRule): void;
    setColor(color: ChatFormatting): void;
    setDeathMessageVisibility(visibility: Team$Visibility): void;
    setDisplayName(displayName: Component): void;
    setNameTagVisibility(visibility: Team$Visibility): void;
    setPlayerPrefix(playerPrefix: Component): void;
    setPlayerSuffix(playerSuffix: Component): void;
    setSeeFriendlyInvisibles(seeFriendlyInvisibles: boolean): void;
    unpackOptions(options: number): void;
    // private viaFabricPlus$fillStyle(arg0: Component, arg1: Style): Component;
    // private viaFabricPlus$getLastStyle(arg0: Component): Style;
}