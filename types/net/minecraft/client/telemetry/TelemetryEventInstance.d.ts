import type { TelemetryEvent } from '../../../../com/mojang/authlib/minecraft/TelemetryEvent.d.ts'
import type { TelemetrySession } from '../../../../com/mojang/authlib/minecraft/TelemetrySession.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TelemetryEventType } from '../../../../net/minecraft/client/telemetry/TelemetryEventType.d.ts'
import type { TelemetryPropertyMap } from '../../../../net/minecraft/client/telemetry/TelemetryPropertyMap.d.ts'
export class TelemetryEventInstance extends Record {
    static CODEC: Codec<TelemetryEventInstance>;
    constructor(type: TelemetryEventType, properties: TelemetryPropertyMap)
    // private properties: TelemetryPropertyMap;
    // private type: TelemetryEventType;
    equals(o: Object | null): boolean;
    export(session: TelemetrySession): TelemetryEvent;
    hashCode(): number;
    properties(): TelemetryPropertyMap;
    toString(): string;
    type(): TelemetryEventType;
}