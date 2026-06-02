import type { RidingEntitySoundInstance } from '../../../../../net/minecraft/client/resources/sounds/RidingEntitySoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractMinecart } from '../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
export class RidingMinecartSoundInstance extends RidingEntitySoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(player: Player, minecart: AbstractMinecart, underwaterSound: boolean, soundEvent: SoundEvent, volumeMin: number, volumeMax: number, volumeAmplifier: number)
    // private minecart: AbstractMinecart;
    // private player: Player;
    // private underwaterSound: boolean;
    getEntitySpeed(): number;
    shoudlPlaySound(): boolean;
    shouldNotPlayUnderwaterSound(): boolean;
}