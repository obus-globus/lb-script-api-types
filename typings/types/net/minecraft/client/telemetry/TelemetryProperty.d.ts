import type { TelemetryPropertyContainer } from '../../../../com/mojang/authlib/minecraft/TelemetryPropertyContainer.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Instant } from '../../../../java/time/Instant.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryProperty$Exporter } from '../../../../net/minecraft/client/telemetry/TelemetryProperty$Exporter.d.ts'
import type { TelemetryProperty$GameMode } from '../../../../net/minecraft/client/telemetry/TelemetryProperty$GameMode.d.ts'
import type { TelemetryProperty$ServerType } from '../../../../net/minecraft/client/telemetry/TelemetryProperty$ServerType.d.ts'
import type { TelemetryPropertyMap } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap.d.ts'
import type { GameLoadTimesEvent$Measurement } from '../../../../net/minecraft/client/telemetry/events/GameLoadTimesEvent$Measurement.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class TelemetryProperty<T extends unknown> extends Record {
    static ADVANCEMENT_GAME_TIME: TelemetryProperty<number>;
    static ADVANCEMENT_ID: TelemetryProperty<string>;
    static BACKEND_FAILURE_MESSAGE: TelemetryProperty<string>;
    static BACKEND_FAILURE_MISSING_CAPABILITIES: TelemetryProperty<string>;
    static BACKEND_FAILURE_REASON: TelemetryProperty<string>;
    static BACKEND_NAME: TelemetryProperty<string>;
    static CLIENT_ID: TelemetryProperty<string>;
    static CLIENT_MODDED: TelemetryProperty<boolean>;
    static DEDICATED_MEMORY_KB: TelemetryProperty<number>;
    static EVENT_TIMESTAMP_UTC: TelemetryProperty<Instant>;
    static FRAME_RATE_SAMPLES: TelemetryProperty<(Object | null)[]>;
    static GAME_MODE: TelemetryProperty<TelemetryProperty$GameMode>;
    static GAME_VERSION: TelemetryProperty<string>;
    static LAUNCHER_NAME: TelemetryProperty<string>;
    static LOAD_TIME_BOOTSTRAP_MS: TelemetryProperty<GameLoadTimesEvent$Measurement>;
    static LOAD_TIME_LOADING_OVERLAY_MS: TelemetryProperty<GameLoadTimesEvent$Measurement>;
    static LOAD_TIME_PRE_WINDOW_MS: TelemetryProperty<GameLoadTimesEvent$Measurement>;
    static LOAD_TIME_TOTAL_TIME_MS: TelemetryProperty<GameLoadTimesEvent$Measurement>;
    static MINECRAFT_SESSION_ID: TelemetryProperty<UUID>;
    static NEW_WORLD: TelemetryProperty<boolean>;
    static NUMBER_OF_SAMPLES: TelemetryProperty<number>;
    static OPERATING_SYSTEM: TelemetryProperty<string>;
    static OPT_IN: TelemetryProperty<boolean>;
    static PLATFORM: TelemetryProperty<string>;
    static REALMS_MAP_CONTENT: TelemetryProperty<string>;
    static RENDER_DISTANCE: TelemetryProperty<number>;
    static RENDER_TIME_SAMPLES: TelemetryProperty<(Object | null)[]>;
    static SECONDS_SINCE_LOAD: TelemetryProperty<number>;
    static SERVER_MODDED: TelemetryProperty<boolean>;
    static SERVER_SESSION_ID: TelemetryProperty<UUID>;
    static SERVER_TYPE: TelemetryProperty<TelemetryProperty$ServerType>;
    static TICKS_SINCE_LOAD: TelemetryProperty<number>;
    static USED_MEMORY_SAMPLES: TelemetryProperty<(Object | null)[]>;
    static USER_ID: TelemetryProperty<string>;
    static WORLD_LOAD_TIME_MS: TelemetryProperty<number>;
    static WORLD_SESSION_ID: TelemetryProperty<UUID>;
    static bool(paramid: string, paramexportKey: string): TelemetryProperty<boolean>;
    static create(paramid: string, paramexportKey: string, paramcodec: Codec<Object>, paramexporter: TelemetryProperty$Exporter<Object>): TelemetryProperty<Object>;
    static gameLoadMeasurement(paramid: string, paramexportKey: string): TelemetryProperty<GameLoadTimesEvent$Measurement>;
    static integer(paramid: string, paramexportKey: string): TelemetryProperty<number>;
    static longSamples(paramid: string, paramexportKey: string): TelemetryProperty<(Object | null)[]>;
    static makeLong(paramid: string, paramexportKey: string): TelemetryProperty<number>;
    static string(paramid: string, paramexportKey: string): TelemetryProperty<string>;
    static uuid(paramid: string, paramexportKey: string): TelemetryProperty<UUID>;
    constructor(id: string, exportKey: string, codec: Codec<T>, exporter: TelemetryProperty$Exporter<T>)
    // private codec: Codec<T>;
    // private exportKey: string;
    // private exporter: TelemetryProperty$Exporter<T>;
    // private id: string;
    codec(): Codec<T>;
    equals(o: Object | null): boolean;
    export(input: TelemetryPropertyMap, output: TelemetryPropertyContainer): void;
    exportKey(): string;
    exporter(): TelemetryProperty$Exporter<T>;
    hashCode(): number;
    id(): string;
    title(): MutableComponent;
    toString(): string;
}