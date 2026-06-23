import type { UserApiService } from '../../../../com/mojang/authlib/minecraft/UserApiService.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { User } from '../../../../net/minecraft/client/User.d.ts'
import type { TelemetryEventSender } from '../../../../net/minecraft/client/telemetry/TelemetryEventSender.d.ts'
import type { TelemetryEventType } from '../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryLogManager } from '../../../../net/minecraft/client/telemetry/TelemetryLogManager.d.ts'
import type { TelemetryPropertyMap } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap.d.ts'
import type { TelemetryPropertyMap$Builder } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap$Builder.d.ts'
import type { WorldSessionTelemetryManager } from '../../../../net/minecraft/client/telemetry/WorldSessionTelemetryManager.d.ts'
export class ClientTelemetryManager extends Object implements AutoCloseable {
    constructor(minecraft: Minecraft, userApiService: UserApiService, user: User)
    // private deviceSessionProperties: TelemetryPropertyMap;
    readonly logDirectory: Path[];
    // private logManager: CompletableFuture<Optional<TelemetryLogManager>>;
    // private minecraft: Minecraft;
    readonly outsideSessionSender: () => (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void;
    // private userApiService: UserApiService;
    close(): void;
    // private createEventSender(): (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void;
    createWorldSessionManager(newWorld: boolean, worldLoadDuration: Duration, minigameName: string): WorldSessionTelemetryManager;
    getLogDirectory(): Path[];
    getOutsideSessionSender(): (param0: TelemetryEventType, param1: (param0: TelemetryPropertyMap$Builder) => void) => void;
}