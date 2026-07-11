import type { JsonFactory } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactory.d.ts'
import type { JsonFactory$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactory$Feature.d.ts'
import type { SerializableString } from '../../../../../../com/azure/json/implementation/jackson/core/SerializableString.d.ts'
import type { StreamReadFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamReadFeature.d.ts'
import type { StreamWriteFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamWriteFeature.d.ts'
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
    configure(arg0: JsonFactory$Feature, arg1: boolean): JsonFactoryBuilder;
    configure(arg0: StreamReadFeature, arg1: boolean): JsonFactoryBuilder;
    configure(arg0: StreamWriteFeature, arg1: boolean): JsonFactoryBuilder;
    configure(arg0: JsonReadFeature, arg1: boolean): JsonFactoryBuilder;
    configure(arg0: JsonWriteFeature, arg1: boolean): JsonFactoryBuilder;
    disable(arg0: JsonFactory$Feature): JsonFactoryBuilder;
    disable(arg0: StreamReadFeature): JsonFactoryBuilder;
    disable(arg0: StreamReadFeature, ...arg1: StreamReadFeature[]): JsonFactoryBuilder;
    disable(arg0: StreamWriteFeature): JsonFactoryBuilder;
    disable(arg0: StreamWriteFeature, ...arg1: StreamWriteFeature[]): JsonFactoryBuilder;
    disable(arg0: JsonReadFeature): JsonFactoryBuilder;
    disable(arg0: JsonReadFeature, ...arg1: JsonReadFeature[]): JsonFactoryBuilder;
    disable(arg0: JsonWriteFeature): JsonFactoryBuilder;
    disable(arg0: JsonWriteFeature, ...arg1: JsonWriteFeature[]): JsonFactoryBuilder;
    enable(arg0: JsonFactory$Feature): JsonFactoryBuilder;
    enable(arg0: StreamReadFeature): JsonFactoryBuilder;
    enable(arg0: StreamReadFeature, ...arg1: StreamReadFeature[]): JsonFactoryBuilder;
    enable(arg0: StreamWriteFeature): JsonFactoryBuilder;
    enable(arg0: StreamWriteFeature, ...arg1: StreamWriteFeature[]): JsonFactoryBuilder;
    enable(arg0: JsonReadFeature): JsonFactoryBuilder;
    enable(arg0: JsonReadFeature, ...arg1: JsonReadFeature[]): JsonFactoryBuilder;
    enable(arg0: JsonWriteFeature): JsonFactoryBuilder;
    enable(arg0: JsonWriteFeature, ...arg1: JsonWriteFeature[]): JsonFactoryBuilder;
}