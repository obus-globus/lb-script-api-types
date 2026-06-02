import type { TelemetryEvent } from '../../../../com/mojang/authlib/minecraft/TelemetryEvent.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TelemetrySession extends Object{
    createNewEvent(arg0: string): TelemetryEvent;
    isEnabled(): boolean;
}