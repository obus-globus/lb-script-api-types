import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { SoundSource } from '../../../../../net/minecraft/sounds/SoundSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class EntityBoundSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(event: SoundEvent, source: SoundSource, volume: number, pitch: number, entity: Entity, seed: number)
    // private entity: Entity;
    canPlaySound(): boolean;
    tick(): void;
}