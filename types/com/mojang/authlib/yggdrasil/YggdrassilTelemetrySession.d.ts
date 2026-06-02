import type { JsonObject } from '../../../../com/google/gson/JsonObject.d.ts'
import type { Environment } from '../../../../com/mojang/authlib/Environment.d.ts'
import type { TelemetryEvent } from '../../../../com/mojang/authlib/minecraft/TelemetryEvent.d.ts'
import type { TelemetrySession } from '../../../../com/mojang/authlib/minecraft/TelemetrySession.d.ts'
import type { MinecraftClient } from '../../../../com/mojang/authlib/minecraft/client/MinecraftClient.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Executor } from '../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class YggdrassilTelemetrySession extends Object implements TelemetrySession {
    static DISABLED: TelemetrySession;
    constructor(arg0: MinecraftClient, arg1: Environment, arg2: Executor)
    // private ioExecutor: Executor;
    // private minecraftClient: MinecraftClient;
    // private routeEvents: URL;
    createNewEvent(arg0: string): TelemetryEvent;
    isEnabled(): boolean;
    sendEvent(arg0: string, arg1: JsonObject): void;
}