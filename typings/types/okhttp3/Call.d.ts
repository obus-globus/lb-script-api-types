import type { Class } from '../java/lang/Class.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Cloneable } from '../java/lang/Cloneable.d.ts'
import type { KClass } from '../kotlin/reflect/KClass.d.ts'
import type { Callback } from '../okhttp3/Callback.d.ts'
import type { EventListener } from '../okhttp3/EventListener.d.ts'
import type { Request } from '../okhttp3/Request.d.ts'
import type { Response } from '../okhttp3/Response.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export interface Call extends Object, Cloneable {
    addEventListener(eventListener: EventListener): void;
    cancel(): void;
    protected clone(): Object;
    clone(): Call;
    enqueue(responseCallback: Callback): void;
    execute(): Response;
    isCanceled(): boolean;
    isExecuted(): boolean;
    request(): Request;
    tag<T extends unknown>(type: Class<T>, computeIfAbsent: () => T): T;
    tag<T extends unknown>(type: Class<T>): T | null;
    tag<T extends unknown>(type: KClass<T>): T | null;
    tag<T extends unknown>(type: KClass<T>, computeIfAbsent: () => T): T;
    timeout(): Timeout;
}