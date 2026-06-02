import type { JsonFactory } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactory.d.ts'
import type { JsonFactory$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonFactory$Feature.d.ts'
import type { JsonGenerator$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonGenerator$Feature.d.ts'
import type { JsonParser$Feature } from '../../../../../../com/azure/json/implementation/jackson/core/JsonParser$Feature.d.ts'
import type { StreamReadFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamReadFeature.d.ts'
import type { StreamWriteFeature } from '../../../../../../com/azure/json/implementation/jackson/core/StreamWriteFeature.d.ts'
import type { InputDecorator } from '../../../../../../com/azure/json/implementation/jackson/core/io/InputDecorator.d.ts'
import type { OutputDecorator } from '../../../../../../com/azure/json/implementation/jackson/core/io/OutputDecorator.d.ts'
import type { JsonReadFeature } from '../../../../../../com/azure/json/implementation/jackson/core/json/JsonReadFeature.d.ts'
import type { JsonWriteFeature } from '../../../../../../com/azure/json/implementation/jackson/core/json/JsonWriteFeature.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class TSFBuilder<F extends JsonFactory, B extends TSFBuilder<F, B>> extends Object {
    constructor()
    // private _factoryFeatures: number;
    // private _inputDecorator: InputDecorator;
    // private _outputDecorator: OutputDecorator;
    // private _streamReadFeatures: number;
    // private _streamWriteFeatures: number;
    // private _failNonJSON(arg0: Object): B;
    _legacyDisable(arg0: JsonGenerator$Feature): void;
    _legacyDisable(arg0: JsonParser$Feature): void;
    _legacyEnable(arg0: JsonGenerator$Feature): void;
    _legacyEnable(arg0: JsonParser$Feature): void;
    _this(): B;
    build(): F;
    configure(arg0: JsonFactory$Feature, arg1: boolean): B;
    configure(arg0: StreamReadFeature, arg1: boolean): B;
    configure(arg0: StreamWriteFeature, arg1: boolean): B;
    configure(arg0: JsonReadFeature, arg1: boolean): B;
    configure(arg0: JsonWriteFeature, arg1: boolean): B;
    disable(arg0: JsonFactory$Feature): B;
    disable(arg0: StreamReadFeature): B;
    disable(arg0: StreamReadFeature, arg1: StreamReadFeature[]): B;
    disable(arg0: StreamWriteFeature): B;
    disable(arg0: StreamWriteFeature, arg1: StreamWriteFeature[]): B;
    disable(arg0: JsonReadFeature): B;
    disable(arg0: JsonReadFeature, arg1: JsonReadFeature[]): B;
    disable(arg0: JsonWriteFeature): B;
    disable(arg0: JsonWriteFeature, arg1: JsonWriteFeature[]): B;
    enable(arg0: JsonFactory$Feature): B;
    enable(arg0: StreamReadFeature): B;
    enable(arg0: StreamReadFeature, arg1: StreamReadFeature[]): B;
    enable(arg0: StreamWriteFeature): B;
    enable(arg0: StreamWriteFeature, arg1: StreamWriteFeature[]): B;
    enable(arg0: JsonReadFeature): B;
    enable(arg0: JsonReadFeature, arg1: JsonReadFeature[]): B;
    enable(arg0: JsonWriteFeature): B;
    enable(arg0: JsonWriteFeature, arg1: JsonWriteFeature[]): B;
    inputDecorator(arg0: InputDecorator): B;
    outputDecorator(arg0: OutputDecorator): B;
}