import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftServer } from '../../../../../net/minecraft/server/MinecraftServer.d.ts'
import type { FeatureFlagSet } from '../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { GameRule } from '../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
import type { GameRuleMap } from '../../../../../net/minecraft/world/level/gamerules/GameRuleMap.d.ts'
import type { GameRuleTypeVisitor } from '../../../../../net/minecraft/world/level/gamerules/GameRuleTypeVisitor.d.ts'
export class GameRules extends Object {
    static ADVANCE_TIME: GameRule<boolean>;
    static ADVANCE_WEATHER: GameRule<boolean>;
    static ALLOW_ENTERING_NETHER_USING_PORTALS: GameRule<boolean>;
    static BLOCK_DROPS: GameRule<boolean>;
    static BLOCK_EXPLOSION_DROP_DECAY: GameRule<boolean>;
    static COMMAND_BLOCKS_WORK: GameRule<boolean>;
    static COMMAND_BLOCK_OUTPUT: GameRule<boolean>;
    static DROWNING_DAMAGE: GameRule<boolean>;
    static ELYTRA_MOVEMENT_CHECK: GameRule<boolean>;
    static ENDER_PEARLS_VANISH_ON_DEATH: GameRule<boolean>;
    static ENTITY_DROPS: GameRule<boolean>;
    static FALL_DAMAGE: GameRule<boolean>;
    static FIRE_DAMAGE: GameRule<boolean>;
    static FIRE_SPREAD_RADIUS_AROUND_PLAYER: GameRule<number>;
    static FORGIVE_DEAD_PLAYERS: GameRule<boolean>;
    static FREEZE_DAMAGE: GameRule<boolean>;
    static GLOBAL_SOUND_EVENTS: GameRule<boolean>;
    static IMMEDIATE_RESPAWN: GameRule<boolean>;
    static KEEP_INVENTORY: GameRule<boolean>;
    static LAVA_SOURCE_CONVERSION: GameRule<boolean>;
    static LIMITED_CRAFTING: GameRule<boolean>;
    static LOCATOR_BAR: GameRule<boolean>;
    static LOG_ADMIN_COMMANDS: GameRule<boolean>;
    static MAX_BLOCK_MODIFICATIONS: GameRule<number>;
    static MAX_COMMAND_FORKS: GameRule<number>;
    static MAX_COMMAND_SEQUENCE_LENGTH: GameRule<number>;
    static MAX_ENTITY_CRAMMING: GameRule<number>;
    static MAX_MINECART_SPEED: GameRule<number>;
    static MAX_SNOW_ACCUMULATION_HEIGHT: GameRule<number>;
    static MOB_DROPS: GameRule<boolean>;
    static MOB_EXPLOSION_DROP_DECAY: GameRule<boolean>;
    static MOB_GRIEFING: GameRule<boolean>;
    static NATURAL_HEALTH_REGENERATION: GameRule<boolean>;
    static PLAYERS_NETHER_PORTAL_CREATIVE_DELAY: GameRule<number>;
    static PLAYERS_NETHER_PORTAL_DEFAULT_DELAY: GameRule<number>;
    static PLAYERS_SLEEPING_PERCENTAGE: GameRule<number>;
    static PLAYER_MOVEMENT_CHECK: GameRule<boolean>;
    static PROJECTILES_CAN_BREAK_BLOCKS: GameRule<boolean>;
    static PVP: GameRule<boolean>;
    static RAIDS: GameRule<boolean>;
    static RANDOM_TICK_SPEED: GameRule<number>;
    static REDUCED_DEBUG_INFO: GameRule<boolean>;
    static RESPAWN_RADIUS: GameRule<number>;
    static SEND_COMMAND_FEEDBACK: GameRule<boolean>;
    static SHOW_ADVANCEMENT_MESSAGES: GameRule<boolean>;
    static SHOW_DEATH_MESSAGES: GameRule<boolean>;
    static SPAWNER_BLOCKS_WORK: GameRule<boolean>;
    static SPAWN_MOBS: GameRule<boolean>;
    static SPAWN_MONSTERS: GameRule<boolean>;
    static SPAWN_PATROLS: GameRule<boolean>;
    static SPAWN_PHANTOMS: GameRule<boolean>;
    static SPAWN_WANDERING_TRADERS: GameRule<boolean>;
    static SPAWN_WARDENS: GameRule<boolean>;
    static SPECTATORS_GENERATE_CHUNKS: GameRule<boolean>;
    static SPREAD_VINES: GameRule<boolean>;
    static TNT_EXPLODES: GameRule<boolean>;
    static TNT_EXPLOSION_DROP_DECAY: GameRule<boolean>;
    static UNIVERSAL_ANGER: GameRule<boolean>;
    static WATER_SOURCE_CONVERSION: GameRule<boolean>;
    static bootstrap(paramregistry: (Object | null)[]): GameRule<Object>;
    static codec(paramenabledFeatures: FeatureFlagSet): Codec<GameRules>;
    constructor(rules: GameRule<Object>[])
    constructor(enabledFeatures: FeatureFlagSet)
    constructor(enabledFeatures: FeatureFlagSet, map: GameRuleMap)
    // private rules: GameRuleMap;
    availableRules(): Stream<GameRule<Object>>;
    copy(enabledFeatures: FeatureFlagSet): GameRules;
    get<T extends Object | number | string | boolean>(gameRule: GameRule<T>): T;
    getAsString(gameRule: GameRule<T>): string;
    set<T extends Object | number | string | boolean>(gameRule: GameRule<T>, value: T, server: MinecraftServer): void;
    setAll(gameRulesMap: GameRuleMap, server: MinecraftServer): void;
    setAll(other: GameRules, server: MinecraftServer): void;
    // private setFromOther(gameRulesMap: GameRuleMap, gameRule: GameRule<T>, server: MinecraftServer): void;
    visitGameRuleTypes(visitor: GameRuleTypeVisitor): void;
}