import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MobEffectInstance } from '../../../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class StatusEffectInstanceSerializer extends Object implements JsonSerializer<MobEffectInstance> {
    static INSTANCE: StatusEffectInstanceSerializer;
    serialize(src: MobEffectInstance | null, typeOfSrc: Type, context: JsonSerializationContext): JsonObject | null;
}