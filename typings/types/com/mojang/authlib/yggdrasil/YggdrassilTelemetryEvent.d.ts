import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { TelemetryEvent } from '../../../../com/mojang/authlib/minecraft/TelemetryEvent.d.ts'
import type { YggdrassilTelemetrySession } from '../../../../com/mojang/authlib/yggdrasil/YggdrassilTelemetrySession.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrassilTelemetryEvent extends Object implements TelemetryEvent {
    static EMPTY: TelemetryEvent;
    constructor(arg0: YggdrassilTelemetrySession, arg1: string)
    // private data: JsonObject;
    // private service: YggdrassilTelemetrySession;
    // private type: string;
    addNullProperty(arg0: string): void;
    addProperty(arg0: string, arg1: boolean): void;
    addProperty(arg0: string, arg1: number): void;
    addProperty(arg0: string, arg1: string): void;
    // private data(): JsonObject;
    send(): void;
}