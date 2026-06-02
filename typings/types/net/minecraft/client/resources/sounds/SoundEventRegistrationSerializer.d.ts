import type { JsonDeserializationContext } from '../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Sound } from '../../../../../net/minecraft/client/resources/sounds/Sound.d.ts'
import type { Sound$Type } from '../../../../../net/minecraft/client/resources/sounds/Sound$Type.d.ts'
import type { SoundEventRegistration } from '../../../../../net/minecraft/client/resources/sounds/SoundEventRegistration.d.ts'
export class SoundEventRegistrationSerializer extends Object implements JsonDeserializer<SoundEventRegistration> {
    constructor()
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext): SoundEventRegistration;
    // private getSound(object: JsonObject): Sound;
    // private getSounds(object: JsonObject): Sound[];
    // private getType(sound: JsonObject, fallback: Sound$Type): Sound$Type;
}