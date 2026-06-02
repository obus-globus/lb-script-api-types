import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
export class CopperGolemOxidationLevel extends Record {
    constructor(spinHeadSound: SoundEvent, hurtSound: SoundEvent, deathSound: SoundEvent, stepSound: SoundEvent, texture: Identifier, eyeTexture: Identifier)
    // private deathSound: SoundEvent;
    // private eyeTexture: Identifier;
    // private hurtSound: SoundEvent;
    // private spinHeadSound: SoundEvent;
    // private stepSound: SoundEvent;
    // private texture: Identifier;
    deathSound(): SoundEvent;
    equals(o: Object | null): boolean;
    eyeTexture(): Identifier;
    hashCode(): number;
    hurtSound(): SoundEvent;
    spinHeadSound(): SoundEvent;
    stepSound(): SoundEvent;
    texture(): Identifier;
    toString(): string;
}