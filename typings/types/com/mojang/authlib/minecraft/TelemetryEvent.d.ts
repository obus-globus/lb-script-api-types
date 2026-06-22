import type { TelemetryPropertyContainer } from '../../../../com/mojang/authlib/minecraft/TelemetryPropertyContainer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TelemetryEvent extends TelemetryPropertyContainer, Object{
    addNullProperty(arg0: string): void;
    addProperty(arg0: string, arg1: boolean): void;
    addProperty(arg0: string, arg1: number): void;
    addProperty(arg0: string, arg1: string): void;
    send(): void;
}