import type { TelemetryPropertyContainer } from '../../../../com/mojang/authlib/minecraft/TelemetryPropertyContainer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TelemetryProperty$Exporter<T extends Object | number | string | boolean> extends Object{
    apply(output: TelemetryPropertyContainer, key: string, value: T): void;
}