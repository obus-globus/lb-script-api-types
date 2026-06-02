import type { Type } from '../../../../../../java/lang/reflect/Type.d.ts'
import type { DateFormat } from '../../../../../../java/text/DateFormat.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { JsonDeserializationContext } from '../../../../../../org/spongepowered/include/com/google/gson/JsonDeserializationContext.d.ts'
import type { JsonDeserializer } from '../../../../../../org/spongepowered/include/com/google/gson/JsonDeserializer.d.ts'
import type { JsonElement } from '../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
import type { JsonSerializationContext } from '../../../../../../org/spongepowered/include/com/google/gson/JsonSerializationContext.d.ts'
import type { JsonSerializer } from '../../../../../../org/spongepowered/include/com/google/gson/JsonSerializer.d.ts'
export class DefaultDateTypeAdapter extends Object implements JsonDeserializer<Date>, JsonSerializer<Date> {
    constructor()
    constructor(arg0: DateFormat, arg1: DateFormat)
    constructor(arg0: number, arg1: number)
    constructor(arg0: string)
    // private enUsFormat: DateFormat;
    // private iso8601Format: DateFormat;
    // private localFormat: DateFormat;
    deserialize(arg0: JsonElement, arg1: Type, arg2: JsonDeserializationContext): Date;
    // private deserializeToDate(arg0: JsonElement): Date;
    serialize(arg0: Date, arg1: Type, arg2: JsonSerializationContext): JsonElement;
    toString(): string;
}