import type { JsonObject } from '../../../../../../../com/google/gson/JsonObject.d.ts'
import type { JsonSerializationContext } from '../../../../../../../com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../../com/google/gson/JsonSerializer.d.ts'
import type { Type } from '../../../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemStackSerializer extends Object implements JsonSerializer<ItemStack> {
    static INSTANCE: ItemStackSerializer;
    serialize(src: ItemStack | null, typeOfSrc: Type, context: JsonSerializationContext): JsonObject | null;
}