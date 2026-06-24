import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
export class GameEvent extends Record {
    static BLOCK_ACTIVATE: Holder$Reference<GameEvent>;
    static BLOCK_ATTACH: Holder$Reference<GameEvent>;
    static BLOCK_CHANGE: Holder$Reference<GameEvent>;
    static BLOCK_CLOSE: Holder$Reference<GameEvent>;
    static BLOCK_DEACTIVATE: Holder$Reference<GameEvent>;
    static BLOCK_DESTROY: Holder$Reference<GameEvent>;
    static BLOCK_DETACH: Holder$Reference<GameEvent>;
    static BLOCK_OPEN: Holder$Reference<GameEvent>;
    static BLOCK_PLACE: Holder$Reference<GameEvent>;
    static BOUNCE: Holder$Reference<GameEvent>;
    static CODEC: Codec<Holder<GameEvent>>;
    static CONTAINER_CLOSE: Holder$Reference<GameEvent>;
    static CONTAINER_OPEN: Holder$Reference<GameEvent>;
    static DEFAULT_NOTIFICATION_RADIUS: number;
    static DRINK: Holder$Reference<GameEvent>;
    static EAT: Holder$Reference<GameEvent>;
    static ELYTRA_GLIDE: Holder$Reference<GameEvent>;
    static ENTITY_ACTION: Holder$Reference<GameEvent>;
    static ENTITY_DAMAGE: Holder$Reference<GameEvent>;
    static ENTITY_DIE: Holder$Reference<GameEvent>;
    static ENTITY_DISMOUNT: Holder$Reference<GameEvent>;
    static ENTITY_INTERACT: Holder$Reference<GameEvent>;
    static ENTITY_MOUNT: Holder$Reference<GameEvent>;
    static ENTITY_PLACE: Holder$Reference<GameEvent>;
    static EQUIP: Holder$Reference<GameEvent>;
    static EXPLODE: Holder$Reference<GameEvent>;
    static FLAP: Holder$Reference<GameEvent>;
    static FLUID_PICKUP: Holder$Reference<GameEvent>;
    static FLUID_PLACE: Holder$Reference<GameEvent>;
    static HIT_GROUND: Holder$Reference<GameEvent>;
    static INSTRUMENT_PLAY: Holder$Reference<GameEvent>;
    static ITEM_INTERACT_FINISH: Holder$Reference<GameEvent>;
    static ITEM_INTERACT_START: Holder$Reference<GameEvent>;
    static JUKEBOX_PLAY: Holder$Reference<GameEvent>;
    static JUKEBOX_STOP_PLAY: Holder$Reference<GameEvent>;
    static LIGHTNING_STRIKE: Holder$Reference<GameEvent>;
    static NOTE_BLOCK_PLAY: Holder$Reference<GameEvent>;
    static PRIME_FUSE: Holder$Reference<GameEvent>;
    static PROJECTILE_LAND: Holder$Reference<GameEvent>;
    static PROJECTILE_SHOOT: Holder$Reference<GameEvent>;
    static RESONATE_1: Holder$Reference<GameEvent>;
    static RESONATE_10: Holder$Reference<GameEvent>;
    static RESONATE_11: Holder$Reference<GameEvent>;
    static RESONATE_12: Holder$Reference<GameEvent>;
    static RESONATE_13: Holder$Reference<GameEvent>;
    static RESONATE_14: Holder$Reference<GameEvent>;
    static RESONATE_15: Holder$Reference<GameEvent>;
    static RESONATE_2: Holder$Reference<GameEvent>;
    static RESONATE_3: Holder$Reference<GameEvent>;
    static RESONATE_4: Holder$Reference<GameEvent>;
    static RESONATE_5: Holder$Reference<GameEvent>;
    static RESONATE_6: Holder$Reference<GameEvent>;
    static RESONATE_7: Holder$Reference<GameEvent>;
    static RESONATE_8: Holder$Reference<GameEvent>;
    static RESONATE_9: Holder$Reference<GameEvent>;
    static SCULK_SENSOR_TENDRILS_CLICKING: Holder$Reference<GameEvent>;
    static SHEAR: Holder$Reference<GameEvent>;
    static SHRIEK: Holder$Reference<GameEvent>;
    static SPLASH: Holder$Reference<GameEvent>;
    static STEP: Holder$Reference<GameEvent>;
    static SWIM: Holder$Reference<GameEvent>;
    static TELEPORT: Holder$Reference<GameEvent>;
    static UNEQUIP: Holder$Reference<GameEvent>;
    static bootstrap(paramregistry: GameEvent[]): Holder<GameEvent>;
    constructor(notificationRadius: number)
    // private notificationRadius: number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    notificationRadius(): number;
    toString(): string;
}