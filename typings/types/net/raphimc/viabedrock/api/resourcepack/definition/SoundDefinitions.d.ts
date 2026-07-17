import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SoundDefinitions$EventSound } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$EventSound.d.ts'
import type { SoundDefinitions$EventSounds } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$EventSounds.d.ts'
import type { SoundDefinitions$SoundDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/SoundDefinitions$SoundDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class SoundDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private blockSounds: JavaMap<string, SoundDefinitions$EventSounds>;
    // private entitySounds: JavaMap<string, SoundDefinitions$EventSounds>;
    // private eventSounds: JavaMap<string, SoundDefinitions$EventSound>;
    // private soundDefinitions: JavaMap<string, SoundDefinitions$SoundDefinition>;
    blockSounds(): JavaMap<string, SoundDefinitions$EventSounds>;
    entitySounds(): JavaMap<string, SoundDefinitions$EventSounds>;
    eventSounds(): JavaMap<string, SoundDefinitions$EventSound>;
    // private mergeDefaults(arg0: JsonObject, arg1: JsonObject): void;
    // private parseEvents(arg0: JsonObject, arg1: boolean, arg2: JavaMap<string, SoundDefinitions$EventSounds>): void;
    soundDefinitions(): JavaMap<string, SoundDefinitions$SoundDefinition>;
}