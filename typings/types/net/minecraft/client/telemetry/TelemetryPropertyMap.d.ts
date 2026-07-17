import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryProperty } from '../../../../net/minecraft/client/telemetry/TelemetryProperty.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
export class TelemetryPropertyMap extends Object {
    static builder(): TelemetryPropertyMap$Builder;
    static createCodec(paramproperties: TelemetryProperty<Object>[]): MapCodec<TelemetryPropertyMap>;
    private constructor(entries: JavaMap<TelemetryProperty<Object>, Object>)
    // private entries: JavaMap<TelemetryProperty<Object>, Object>;
    get<T extends unknown>(property: TelemetryProperty<T>): T;
    propertySet(): TelemetryProperty<Object>[];
    toString(): string;
}