import type { JsonDeserializationContext } from '../../../../../../com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CuboidFace } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidFace.d.ts'
import type { CuboidModelElement } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidModelElement.d.ts'
import type { CuboidRotation } from '../../../../../../net/minecraft/client/resources/model/cuboid/CuboidRotation.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../../net/minecraft/core/Direction$Axis.d.ts'
export class CuboidModelElement$Deserializer extends Object implements JsonDeserializer<CuboidModelElement> {
    constructor()
    deserialize(json: JsonElement, typeOfT: Type, context: JsonDeserializationContext): CuboidModelElement;
    // private filterNullFromFaces(context: JsonDeserializationContext, object: JsonObject): { [key in Direction]: CuboidFace };
    // private getAxis(object: JsonObject): Direction$Axis;
    // private getFaces(context: JsonDeserializationContext, object: JsonObject): { [key in Direction]: CuboidFace };
    // private getFacing(name: string): Direction;
    // private getRotation(object: JsonObject): CuboidRotation;
}