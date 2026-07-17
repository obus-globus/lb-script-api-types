import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SoundEventRegistration } from '../../../../net/minecraft/client/resources/sounds/SoundEventRegistration.d.ts'
import type { SoundEngine } from '../../../../net/minecraft/client/sounds/SoundEngine.d.ts'
import type { WeighedSoundEvents } from '../../../../net/minecraft/client/sounds/WeighedSoundEvents.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Resource } from '../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceManager } from '../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class SoundManager$Preparations extends Object {
    constructor()
    // private registry: JavaMap<Identifier, WeighedSoundEvents>;
    // private soundCache: JavaMap<Identifier, Resource>;
    apply(registry: JavaMap<Identifier, WeighedSoundEvents>, soundCache: JavaMap<Identifier, Resource>, engine: SoundEngine): void;
    // private handleRegistration(eventLocation: Identifier, soundEventRegistration: SoundEventRegistration): void;
    // private listResources(resourceManager: ResourceManager): void;
}