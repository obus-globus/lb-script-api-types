import type { Heartbeat } from '../../../../io/ktor/server/sse/Heartbeat.d.ts'
import type { ServerSSESession } from '../../../../io/ktor/server/sse/ServerSSESession.d.ts'
import type { ServerSSESessionWithSerialization } from '../../../../io/ktor/server/sse/ServerSSESessionWithSerialization.d.ts'
import type { TypedServerSentEvent } from '../../../../io/ktor/sse/TypedServerSentEvent.d.ts'
import type { AttributeKey } from '../../../../io/ktor/util/AttributeKey.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Job } from '../../../../kotlinx/coroutines/Job.d.ts'
export class ServerSSESessionKt extends Object {
    static getHeartbeatJobKey(): AttributeKey<Job>;
    static heartbeat(self: ServerSSESession, heartbeatConfig: (param0: Heartbeat) => void): void;
    static send<T extends unknown>(self: ServerSSESessionWithSerialization, data: T | null, event: string | null, id: string | null, retry: number | null, comments: string | null): void;
    static send<T extends unknown>(self: ServerSSESessionWithSerialization, data: T): void;
    static send<T extends unknown>(self: ServerSSESessionWithSerialization, event: TypedServerSentEvent<T>): void;
}