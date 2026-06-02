import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockParticleOption } from '../../../../net/minecraft/core/particles/BlockParticleOption.d.ts'
import type { ColorParticleOption } from '../../../../net/minecraft/core/particles/ColorParticleOption.d.ts'
import type { DustColorTransitionOptions } from '../../../../net/minecraft/core/particles/DustColorTransitionOptions.d.ts'
import type { DustParticleOptions } from '../../../../net/minecraft/core/particles/DustParticleOptions.d.ts'
import type { ItemParticleOption } from '../../../../net/minecraft/core/particles/ItemParticleOption.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ParticleType } from '../../../../net/minecraft/core/particles/ParticleType.d.ts'
import type { PowerParticleOption } from '../../../../net/minecraft/core/particles/PowerParticleOption.d.ts'
import type { SculkChargeParticleOptions } from '../../../../net/minecraft/core/particles/SculkChargeParticleOptions.d.ts'
import type { ShriekParticleOption } from '../../../../net/minecraft/core/particles/ShriekParticleOption.d.ts'
import type { SimpleParticleType } from '../../../../net/minecraft/core/particles/SimpleParticleType.d.ts'
import type { SpellParticleOption } from '../../../../net/minecraft/core/particles/SpellParticleOption.d.ts'
import type { TrailParticleOption } from '../../../../net/minecraft/core/particles/TrailParticleOption.d.ts'
import type { VibrationParticleOption } from '../../../../net/minecraft/core/particles/VibrationParticleOption.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
export class ParticleTypes extends Object {
    static ANGRY_VILLAGER: SimpleParticleType;
    static ASH: SimpleParticleType;
    static BLOCK: ParticleType<BlockParticleOption>;
    static BLOCK_CRUMBLE: ParticleType<BlockParticleOption>;
    static BLOCK_MARKER: ParticleType<BlockParticleOption>;
    static BUBBLE: SimpleParticleType;
    static BUBBLE_COLUMN_UP: SimpleParticleType;
    static BUBBLE_POP: SimpleParticleType;
    static CAMPFIRE_COSY_SMOKE: SimpleParticleType;
    static CAMPFIRE_SIGNAL_SMOKE: SimpleParticleType;
    static CHERRY_LEAVES: SimpleParticleType;
    static CLOUD: SimpleParticleType;
    static CODEC: Codec<ParticleOptions>;
    static COMPOSTER: SimpleParticleType;
    static COPPER_FIRE_FLAME: SimpleParticleType;
    static CRIMSON_SPORE: SimpleParticleType;
    static CRIT: SimpleParticleType;
    static CURRENT_DOWN: SimpleParticleType;
    static DAMAGE_INDICATOR: SimpleParticleType;
    static DOLPHIN: SimpleParticleType;
    static DRAGON_BREATH: ParticleType<PowerParticleOption>;
    static DRIPPING_DRIPSTONE_LAVA: SimpleParticleType;
    static DRIPPING_DRIPSTONE_WATER: SimpleParticleType;
    static DRIPPING_HONEY: SimpleParticleType;
    static DRIPPING_LAVA: SimpleParticleType;
    static DRIPPING_OBSIDIAN_TEAR: SimpleParticleType;
    static DRIPPING_WATER: SimpleParticleType;
    static DUST: ParticleType<DustParticleOptions>;
    static DUST_COLOR_TRANSITION: ParticleType<DustColorTransitionOptions>;
    static DUST_PILLAR: ParticleType<BlockParticleOption>;
    static DUST_PLUME: SimpleParticleType;
    static EFFECT: ParticleType<SpellParticleOption>;
    static EGG_CRACK: SimpleParticleType;
    static ELDER_GUARDIAN: SimpleParticleType;
    static ELECTRIC_SPARK: SimpleParticleType;
    static ENCHANT: SimpleParticleType;
    static ENCHANTED_HIT: SimpleParticleType;
    static END_ROD: SimpleParticleType;
    static ENTITY_EFFECT: ParticleType<ColorParticleOption>;
    static EXPLOSION: SimpleParticleType;
    static EXPLOSION_EMITTER: SimpleParticleType;
    static FALLING_DRIPSTONE_LAVA: SimpleParticleType;
    static FALLING_DRIPSTONE_WATER: SimpleParticleType;
    static FALLING_DUST: ParticleType<BlockParticleOption>;
    static FALLING_HONEY: SimpleParticleType;
    static FALLING_LAVA: SimpleParticleType;
    static FALLING_NECTAR: SimpleParticleType;
    static FALLING_OBSIDIAN_TEAR: SimpleParticleType;
    static FALLING_SPORE_BLOSSOM: SimpleParticleType;
    static FALLING_WATER: SimpleParticleType;
    static FIREFLY: SimpleParticleType;
    static FIREWORK: SimpleParticleType;
    static FISHING: SimpleParticleType;
    static FLAME: SimpleParticleType;
    static FLASH: ParticleType<ColorParticleOption>;
    static GLOW: SimpleParticleType;
    static GLOW_SQUID_INK: SimpleParticleType;
    static GUST: SimpleParticleType;
    static GUST_EMITTER_LARGE: SimpleParticleType;
    static GUST_EMITTER_SMALL: SimpleParticleType;
    static HAPPY_VILLAGER: SimpleParticleType;
    static HEART: SimpleParticleType;
    static INFESTED: SimpleParticleType;
    static INSTANT_EFFECT: ParticleType<SpellParticleOption>;
    static ITEM: ParticleType<ItemParticleOption>;
    static ITEM_COBWEB: SimpleParticleType;
    static ITEM_SLIME: SimpleParticleType;
    static ITEM_SNOWBALL: SimpleParticleType;
    static LANDING_HONEY: SimpleParticleType;
    static LANDING_LAVA: SimpleParticleType;
    static LANDING_OBSIDIAN_TEAR: SimpleParticleType;
    static LARGE_SMOKE: SimpleParticleType;
    static LAVA: SimpleParticleType;
    static MYCELIUM: SimpleParticleType;
    static NAUTILUS: SimpleParticleType;
    static NOTE: SimpleParticleType;
    static OMINOUS_SPAWNING: SimpleParticleType;
    static PALE_OAK_LEAVES: SimpleParticleType;
    static PAUSE_MOB_GROWTH: SimpleParticleType;
    static POOF: SimpleParticleType;
    static PORTAL: SimpleParticleType;
    static RAID_OMEN: SimpleParticleType;
    static RAIN: SimpleParticleType;
    static RESET_MOB_GROWTH: SimpleParticleType;
    static REVERSE_PORTAL: SimpleParticleType;
    static SCRAPE: SimpleParticleType;
    static SCULK_CHARGE: ParticleType<SculkChargeParticleOptions>;
    static SCULK_CHARGE_POP: SimpleParticleType;
    static SCULK_SOUL: SimpleParticleType;
    static SHRIEK: ParticleType<ShriekParticleOption>;
    static SMALL_FLAME: SimpleParticleType;
    static SMALL_GUST: SimpleParticleType;
    static SMOKE: SimpleParticleType;
    static SNEEZE: SimpleParticleType;
    static SNOWFLAKE: SimpleParticleType;
    static SONIC_BOOM: SimpleParticleType;
    static SOUL: SimpleParticleType;
    static SOUL_FIRE_FLAME: SimpleParticleType;
    static SPIT: SimpleParticleType;
    static SPLASH: SimpleParticleType;
    static SPORE_BLOSSOM_AIR: SimpleParticleType;
    static SQUID_INK: SimpleParticleType;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ParticleOptions>;
    static SWEEP_ATTACK: SimpleParticleType;
    static TINTED_LEAVES: ParticleType<ColorParticleOption>;
    static TOTEM_OF_UNDYING: SimpleParticleType;
    static TRAIL: ParticleType<TrailParticleOption>;
    static TRIAL_OMEN: SimpleParticleType;
    static TRIAL_SPAWNER_DETECTED_PLAYER: SimpleParticleType;
    static TRIAL_SPAWNER_DETECTED_PLAYER_OMINOUS: SimpleParticleType;
    static UNDERWATER: SimpleParticleType;
    static VAULT_CONNECTION: SimpleParticleType;
    static VIBRATION: ParticleType<VibrationParticleOption>;
    static WARPED_SPORE: SimpleParticleType;
    static WAX_OFF: SimpleParticleType;
    static WAX_ON: SimpleParticleType;
    static WHITE_ASH: SimpleParticleType;
    static WHITE_SMOKE: SimpleParticleType;
    static WITCH: SimpleParticleType;
    constructor()
}