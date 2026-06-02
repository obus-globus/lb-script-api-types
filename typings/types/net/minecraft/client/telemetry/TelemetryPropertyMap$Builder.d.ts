import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryProperty } from '../../../../net/minecraft/client/telemetry/TelemetryProperty.d.ts'
import type { TelemetryPropertyMap } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap.d.ts'
export class TelemetryPropertyMap$Builder extends Object {
    private constructor()
    // private entries: Map<TelemetryProperty<Object>, Object>;
    build(): TelemetryPropertyMap;
    put<T extends Object | number | string | boolean>(property: TelemetryProperty<T>, value: T): TelemetryPropertyMap$Builder;
    putAll(properties: TelemetryPropertyMap): TelemetryPropertyMap$Builder;
    putIfNotNull<T extends Object | number | string | boolean>(property: TelemetryProperty<T>, value: T): TelemetryPropertyMap$Builder;
}