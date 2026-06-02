import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { PlayerData$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerData$Companion.d.ts'
import type { ScoreboardData } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/ScoreboardData.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MobEffectInstance } from '../../../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameType } from '../../../../../../../../../net/minecraft/world/level/GameType.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PlayerData extends Record {
    static Companion: PlayerData$Companion;
    static fromPlayer(paramarg0: Player): PlayerData;
    constructor(username: string, uuid: string, dimension: Identifier, position: Vec3, netherPosition: Vec3, blockPosition: BlockPos, velocity: Vec3, selectedSlot: number, gameMode: GameType, health: number, actualHealth: number, maxHealth: number, absorption: number, yaw: number, pitch: number, armor: number, food: number, air: number, maxAir: number, experienceLevel: number, experienceProgress: number, ping: number, effects: MobEffectInstance[], mainHandStack: ItemStack, offHandStack: ItemStack, armorItems: ItemStack[], scoreboard: ScoreboardData | null)
    // private absorption: number;
    /*not mapped: */ absorption(): number;
    // private actualHealth: number;
    /*not mapped: */ actualHealth(): number;
    // private air: number;
    /*not mapped: */ air(): number;
    // private armor: number;
    /*not mapped: */ armor(): number;
    // private armorItems: ItemStack[];
    /*not mapped: */ armorItems(): ItemStack[];
    // private blockPosition: BlockPos;
    /*not mapped: */ blockPosition(): BlockPos;
    // private dimension: Identifier;
    /*not mapped: */ dimension(): Identifier;
    // private effects: MobEffectInstance[];
    /*not mapped: */ effects(): MobEffectInstance[];
    // private experienceLevel: number;
    /*not mapped: */ experienceLevel(): number;
    // private experienceProgress: number;
    /*not mapped: */ experienceProgress(): number;
    // private food: number;
    /*not mapped: */ food(): number;
    // private gameMode: GameType;
    /*not mapped: */ gameMode(): GameType;
    // private health: number;
    /*not mapped: */ health(): number;
    // private mainHandStack: ItemStack;
    /*not mapped: */ mainHandStack(): ItemStack;
    // private maxAir: number;
    /*not mapped: */ maxAir(): number;
    // private maxHealth: number;
    /*not mapped: */ maxHealth(): number;
    // private netherPosition: Vec3;
    /*not mapped: */ netherPosition(): Vec3;
    // private offHandStack: ItemStack;
    /*not mapped: */ offHandStack(): ItemStack;
    // private ping: number;
    /*not mapped: */ ping(): number;
    // private pitch: number;
    /*not mapped: */ pitch(): number;
    // private position: Vec3;
    /*not mapped: */ position(): Vec3;
    // private scoreboard: ScoreboardData | null;
    /*not mapped: */ scoreboard(): ScoreboardData | null;
    // private selectedSlot: number;
    /*not mapped: */ selectedSlot(): number;
    // private username: string;
    /*not mapped: */ username(): string;
    // private uuid: string;
    /*not mapped: */ uuid(): string;
    // private velocity: Vec3;
    /*not mapped: */ velocity(): Vec3;
    // private yaw: number;
    /*not mapped: */ yaw(): number;
    component1(): string;
    component10(): number;
    component11(): number;
    component12(): number;
    component13(): number;
    component14(): number;
    component15(): number;
    component16(): number;
    component17(): number;
    component18(): number;
    component19(): number;
    component2(): string;
    component20(): number;
    component21(): number;
    component22(): number;
    component23(): MobEffectInstance[];
    component24(): ItemStack;
    component25(): ItemStack;
    component26(): ItemStack[];
    component27(): ScoreboardData | null;
    component3(): Identifier;
    component4(): Vec3;
    component5(): Vec3;
    component6(): BlockPos;
    component7(): Vec3;
    component8(): number;
    component9(): GameType;
    copy(username: string, uuid: string, dimension: Identifier, position: Vec3, netherPosition: Vec3, blockPosition: BlockPos, velocity: Vec3, selectedSlot: number, gameMode: GameType, health: number, actualHealth: number, maxHealth: number, absorption: number, yaw: number, pitch: number, armor: number, food: number, air: number, maxAir: number, experienceLevel: number, experienceProgress: number, ping: number, effects: MobEffectInstance[], mainHandStack: ItemStack, offHandStack: ItemStack, armorItems: ItemStack[], scoreboard: ScoreboardData | null): PlayerData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}