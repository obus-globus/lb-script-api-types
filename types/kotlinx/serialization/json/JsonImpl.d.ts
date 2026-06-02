import type { Json } from '../../../kotlinx/serialization/json/Json.d.ts'
import type { Json$Default } from '../../../kotlinx/serialization/json/Json$Default.d.ts'
import type { JsonConfiguration } from '../../../kotlinx/serialization/json/JsonConfiguration.d.ts'
import type { SerializersModule } from '../../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class JsonImpl extends Json {
    static Default: Json$Default;
    constructor(configuration: JsonConfiguration, module: SerializersModule)
    // private validateConfiguration(): void;
}