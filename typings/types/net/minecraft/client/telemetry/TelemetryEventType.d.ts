import type { TelemetryEvent } from '../../../../com/mojang/authlib/minecraft/TelemetryEvent.d.ts'
import type { TelemetrySession } from '../../../../com/mojang/authlib/minecraft/TelemetrySession.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryEventInstance } from '../../../../net/minecraft/client/telemetry/TelemetryEventInstance.d.ts'
import type { TelemetryEventType$Builder } from '../../../../net/minecraft/client/telemetry/TelemetryEventType$Builder.d.ts'
import type { TelemetryProperty } from '../../../../net/minecraft/client/telemetry/TelemetryProperty.d.ts'
import type { TelemetryPropertyMap } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap.d.ts'
import type { MutableComponent } from '../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class TelemetryEventType extends Object {
    static ADVANCEMENT_MADE: TelemetryEventType;
    static CODEC: Codec<TelemetryEventType>;
    static GAME_LOAD_TIMES: TelemetryEventType;
    static GRAPHICS_CAPABILITIES: TelemetryEventType;
    static PERFORMANCE_METRICS: TelemetryEventType;
    static WORLD_LOADED: TelemetryEventType;
    static WORLD_LOAD_TIMES: TelemetryEventType;
    static WORLD_UNLOADED: TelemetryEventType;
    static builder(paramid: string, paramexportKey: string): TelemetryEventType$Builder;
    static selfTest(): boolean;
    static values(): TelemetryEventType[];
    private constructor(id: string, exportKey: string, properties: TelemetryProperty<Object>[], isOptIn: boolean)
    // private codec: MapCodec<TelemetryEventInstance>;
    // private exportKey: string;
    // private id: string;
    // private isOptIn: boolean;
    // private properties: TelemetryProperty<Object>[];
    codec(): MapCodec<TelemetryEventInstance>;
    contains<T extends unknown>(property: TelemetryProperty<T>): boolean;
    description(): MutableComponent;
    export(session: TelemetrySession, input: TelemetryPropertyMap): TelemetryEvent;
    id(): string;
    isOptIn(): boolean;
    // private makeTranslation(suffix: string): MutableComponent;
    properties(): TelemetryProperty<Object>[];
    title(): MutableComponent;
    toString(): string;
}