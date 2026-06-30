import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SerializationExtensionsKt extends Object {
    static toJsonArray(vec3: Vec3): JsonElement[];
    static toJsonObject(vec3: Vec3): JsonObject;
}