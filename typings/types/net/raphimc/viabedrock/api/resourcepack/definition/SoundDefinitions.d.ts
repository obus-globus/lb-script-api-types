import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundDefinitions$EventSound } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$EventSound.d.ts'
import type { SoundDefinitions$EventSounds } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$EventSounds.d.ts'
import type { SoundDefinitions$SoundDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$SoundDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class SoundDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private blockSounds: { [key: string]: SoundDefinitions$EventSounds };
    // private entitySounds: { [key: string]: SoundDefinitions$EventSounds };
    // private eventSounds: { [key: string]: SoundDefinitions$EventSound };
    // private soundDefinitions: { [key: string]: SoundDefinitions$SoundDefinition };
    blockSounds(): { [key: string]: SoundDefinitions$EventSounds };
    entitySounds(): { [key: string]: SoundDefinitions$EventSounds };
    eventSounds(): { [key: string]: SoundDefinitions$EventSound };
    // private mergeDefaults(arg0: JsonObject, arg1: JsonObject): void;
    // private parseEvents(arg0: JsonObject, arg1: boolean, arg2: { [key: string]: SoundDefinitions$EventSounds }): void;
    soundDefinitions(): { [key: string]: SoundDefinitions$SoundDefinition };
}