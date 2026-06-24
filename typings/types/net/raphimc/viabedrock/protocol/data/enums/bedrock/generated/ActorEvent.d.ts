import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class ActorEvent extends Enum<ActorEvent> {
    static ACTOR_GROW_UP: ActorEvent;
    static AGENT_SWING_ARM: ActorEvent;
    static AIR_SUPPLY: ActorEvent;
    static BABY_AGE: ActorEvent;
    static BALLOON_POP: ActorEvent;
    static CARAVAN_UPDATED: ActorEvent;
    static DEATH: ActorEvent;
    static DEPRECATED_ADD_PLAYER_LEVELS: ActorEvent;
    static DEPRECATED_UPDATE_STRUCTURE_FEATURE: ActorEvent;
    static DRAGON_START_DEATH_ANIM: ActorEvent;
    static DRINK_MILK: ActorEvent;
    static DRINK_POTION: ActorEvent;
    static EAT_GRASS: ActorEvent;
    static FEED: ActorEvent;
    static FINISHED_CHARGING_ITEM: ActorEvent;
    static FIREWORKS_EXPLODE: ActorEvent;
    static FISHHOOK_BUBBLE: ActorEvent;
    static FISHHOOK_FISHPOS: ActorEvent;
    static FISHHOOK_HOOKTIME: ActorEvent;
    static FISHHOOK_TEASE: ActorEvent;
    static GROUND_DUST: ActorEvent;
    static GUARDIAN_ATTACK_SOUND: ActorEvent;
    static GUARDIAN_MINING_FATIGUE: ActorEvent;
    static HURT: ActorEvent;
    static HURT_WITHOUT_RECEIVING_DAMAGE: ActorEvent;
    static INSTANT_DEATH: ActorEvent;
    static IN_LOVE_HEARTS: ActorEvent;
    static JUMP: ActorEvent;
    static KINETIC_DAMAGE_DEALT: ActorEvent;
    static LEASH_DESTROYED: ActorEvent;
    static LOVE_HEARTS: ActorEvent;
    static NONE: ActorEvent;
    static NOTIFY_TRADE: ActorEvent;
    static PLAYER_SPAWNED_MOB: ActorEvent;
    static PLAY_AMBIENT: ActorEvent;
    static PRIME_CREEPER: ActorEvent;
    static PRIME_TNTCART: ActorEvent;
    static PUKE: ActorEvent;
    static SHAKE: ActorEvent;
    static SHAKE_WETNESS: ActorEvent;
    static SHAKE_WETNESS_STOP: ActorEvent;
    static SILVERFISH_MERGE_ANIM: ActorEvent;
    static SPAWN_ALIVE: ActorEvent;
    static SQUID_FLEEING: ActorEvent;
    static START_ATTACKING: ActorEvent;
    static START_OFFER_FLOWER: ActorEvent;
    static START_SWIMMING: ActorEvent;
    static STOP_ATTACKING: ActorEvent;
    static STOP_OFFER_FLOWER: ActorEvent;
    static SUMMON_AGENT: ActorEvent;
    static TALISMAN_ACTIVATE: ActorEvent;
    static TAMING_FAILED: ActorEvent;
    static TAMING_SUCCEEDED: ActorEvent;
    static THROW_POTION: ActorEvent;
    static TREASURE_HUNT: ActorEvent;
    static UPDATE_STACK_SIZE: ActorEvent;
    static VIBRATION_DETECTED: ActorEvent;
    static VILLAGER_ANGRY: ActorEvent;
    static VILLAGER_HAPPY: ActorEvent;
    static WITCH_HAT_MAGIC: ActorEvent;
    static ZOMBIE_CONVERTING: ActorEvent;
    static getByName(paramarg0: string): ActorEvent;
    static getByName(paramarg0: string, paramarg1: ActorEvent): ActorEvent;
    static getByValue(paramarg0: number): ActorEvent;
    static getByValue(paramarg0: number, paramarg1: ActorEvent): ActorEvent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ActorEvent;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    private constructor(arg2: ActorEvent)
    readonly value: number;
    getValue(): number;
    name(): "NONE" | "JUMP" | "HURT" | "DEATH" | "START_ATTACKING" | "STOP_ATTACKING" | "TAMING_FAILED" | "TAMING_SUCCEEDED" | "SHAKE_WETNESS" | "EAT_GRASS" | "FISHHOOK_BUBBLE" | "FISHHOOK_FISHPOS" | "FISHHOOK_HOOKTIME" | "FISHHOOK_TEASE" | "SQUID_FLEEING" | "ZOMBIE_CONVERTING" | "PLAY_AMBIENT" | "SPAWN_ALIVE" | "START_OFFER_FLOWER" | "STOP_OFFER_FLOWER" | "LOVE_HEARTS" | "VILLAGER_ANGRY" | "VILLAGER_HAPPY" | "WITCH_HAT_MAGIC" | "FIREWORKS_EXPLODE" | "IN_LOVE_HEARTS" | "SILVERFISH_MERGE_ANIM" | "GUARDIAN_ATTACK_SOUND" | "DRINK_POTION" | "THROW_POTION" | "PRIME_TNTCART" | "PRIME_CREEPER" | "AIR_SUPPLY" | "DEPRECATED_ADD_PLAYER_LEVELS" | "GUARDIAN_MINING_FATIGUE" | "AGENT_SWING_ARM" | "DRAGON_START_DEATH_ANIM" | "GROUND_DUST" | "SHAKE" | "FEED" | "BABY_AGE" | "INSTANT_DEATH" | "NOTIFY_TRADE" | "LEASH_DESTROYED" | "CARAVAN_UPDATED" | "TALISMAN_ACTIVATE" | "DEPRECATED_UPDATE_STRUCTURE_FEATURE" | "PLAYER_SPAWNED_MOB" | "PUKE" | "UPDATE_STACK_SIZE" | "START_SWIMMING" | "BALLOON_POP" | "TREASURE_HUNT" | "SUMMON_AGENT" | "FINISHED_CHARGING_ITEM" | "ACTOR_GROW_UP" | "VIBRATION_DETECTED" | "DRINK_MILK" | "SHAKE_WETNESS_STOP" | "KINETIC_DAMAGE_DEALT" | "HURT_WITHOUT_RECEIVING_DAMAGE";
}