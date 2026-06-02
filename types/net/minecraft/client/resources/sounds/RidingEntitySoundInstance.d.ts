import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
export class RidingEntitySoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(player: Player, entity: Entity, underwaterSound: boolean, soundEvent: SoundEvent, soundSource: SoundSource, volumeMin: number, volumeMax: number, volumeAmplifier: number)
    // private entity: Entity;
    // private player: Player;
    // private underwaterSound: boolean;
    // private volumeAmplifier: number;
    // private volumeMax: number;
    // private volumeMin: number;
    canPlaySound(): boolean;
    canStartSilent(): boolean;
    getEntitySpeed(): number;
    shoudlPlaySound(): boolean;
    shouldNotPlayUnderwaterSound(): boolean;
    tick(): void;
}