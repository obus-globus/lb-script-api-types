import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryProperty } from '../../../../net/minecraft/client/telemetry/TelemetryProperty.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
export class TelemetryPropertyMap extends Object {
    static builder(): TelemetryPropertyMap$Builder;
    static createCodec(paramproperties: (Object | null)[]): MapCodec<TelemetryPropertyMap>;
    private constructor(entries: Map<TelemetryProperty<Object>, Object>)
    // private entries: Map<TelemetryProperty<Object>, Object>;
    get<T extends Object | number | string | boolean>(property: TelemetryProperty<T>): T;
    propertySet(): TelemetryProperty<Object>[];
    toString(): string;
}