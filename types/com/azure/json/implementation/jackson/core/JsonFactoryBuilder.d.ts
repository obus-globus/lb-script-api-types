import type { JsonFactory } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactory.d.ts'
import type { SerializableString } from '../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { TSFBuilder } from '../../../../../../com/azure/json/implementation/jackson/core/TSFBuilder.d.ts'
import type { CharacterEscapes } from '../../../../../../com/azure/json/implementation/jackson/core/io/CharacterEscapes.d.ts'
import type { JsonReadFeature } from '../../../../../../com/azure/json/implementation/jackson/core/json/JsonReadFeature.d.ts'
import type { JsonWriteFeature } from '../../../../../../com/azure/json/implementation/jackson/core/json/JsonWriteFeature.d.ts'
export class JsonFactoryBuilder extends TSFBuilder<JsonFactory, JsonFactoryBuilder> {
    constructor()
    // private _characterEscapes: CharacterEscapes;
    // private _maximumNonEscapedChar: number;
    // private _quoteChar: string;
    // private _rootValueSeparator: SerializableString;
    build(): JsonFactory;
    configure(arg0: JsonReadFeature, arg1: boolean): JsonFactoryBuilder;
    configure(arg0: JsonWriteFeature, arg1: boolean): JsonFactoryBuilder;
    disable(arg0: JsonReadFeature): JsonFactoryBuilder;
    disable(arg0: JsonReadFeature, arg1: JsonReadFeature[]): JsonFactoryBuilder;
    disable(arg0: JsonWriteFeature): JsonFactoryBuilder;
    disable(arg0: JsonWriteFeature, arg1: JsonWriteFeature[]): JsonFactoryBuilder;
    enable(arg0: JsonReadFeature): JsonFactoryBuilder;
    enable(arg0: JsonReadFeature, arg1: JsonReadFeature[]): JsonFactoryBuilder;
    enable(arg0: JsonWriteFeature): JsonFactoryBuilder;
    enable(arg0: JsonWriteFeature, arg1: JsonWriteFeature[]): JsonFactoryBuilder;
}