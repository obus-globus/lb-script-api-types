import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TelemetryEventSender } from '../../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryProperty$GameMode } from '../../../../../net/minecraft/client/telemetry/TelemetryProperty$GameMode.d.ts'
import type { TelemetryProperty$ServerType } from '../../../../../net/minecraft/client/telemetry/TelemetryProperty$ServerType.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
import type { GameType } from '../../../../../net/minecraft/world/level/GameType.d.ts'
export class WorldLoadEvent extends Object {
    constructor(minigameName: string)
    // private eventSent: boolean;
    // private gameMode: TelemetryProperty$GameMode;
    // private minigameName: string;
    readonly serverBrand: string;
    addProperties(properties: TelemetryPropertyMap$Builder): void;
    // private getServerType(): TelemetryProperty$ServerType;
    send(eventSender: (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void, lastChance: boolean): boolean;
    setGameMode(type: GameType, hardcore: boolean): void;
    setServerBrand(serverBrand: string): void;
    wasSent(): boolean;
}