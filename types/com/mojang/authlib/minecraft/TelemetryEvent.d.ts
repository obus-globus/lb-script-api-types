import type { TelemetryPropertyContainer } from '../../../../com/mojang/authlib/minecraft/TelemetryPropertyContainer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TelemetryEvent extends TelemetryPropertyContainer, Object{
    send(): void;
}