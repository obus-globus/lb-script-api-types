import type { AbstractTickableSoundInstance } from '../../../../../net/minecraft/client/resources/sounds/AbstractTickableSoundInstance.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Sniffer } from '../../../../../net/minecraft/world/entity/animal/sniffer/Sniffer.d.ts'
export class SnifferSoundInstance extends AbstractTickableSoundInstance {
    static EMPTY_SOUND: Identifier;
    constructor(sniffer: Sniffer)
    // private sniffer: Sniffer;
    canPlaySound(): boolean;
    tick(): void;
}