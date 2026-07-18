import type { Gson } from '../../../../com/google/gson/Gson.d.ts'
import type { GsonBuilder } from '../../../../com/google/gson/GsonBuilder.d.ts'
import type { ContentType } from '../../../../io/ktor/http/ContentType.d.ts'
import type { Configuration } from '../../../../io/ktor/serialization/Configuration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../kotlin/reflect/KClass.d.ts'
export class GsonConverterKt extends Object {
    static gson(self: Configuration, contentType: ContentType, block: (param0: GsonBuilder) => void): void;
    static isExcluded(self: Gson, type: KClass<Object>): boolean;
}