import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractMinecart } from '../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
export class MinecartSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(minecart: AbstractMinecart)
    // private minecart: AbstractMinecart;
    readonly pitch: number;
    canPlaySound(): boolean;
    canStartSilent(): boolean;
    tick(): void;
}