import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { JsonElement } from '../../../../com/google/gson/JsonElement.d.ts'
import type { ReflectionBasedSerialization } from '../../../../com/mojang/realmsclient/dto/ReflectionBasedSerialization.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GuardedSerializer extends Object {
    constructor()
    // private gson: Gson;
    fromJson<T extends ReflectionBasedSerialization>(contents: string, cls: Class<T>): T;
    toJson(jsonElement: JsonElement): string;
    toJson(object: ReflectionBasedSerialization): string;
}