import type { IoEvent } from '../../../io/netty/channel/IoEvent.d.ts'
import type { IoRegistration } from '../../../io/netty/channel/IoRegistration.d.ts'
import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface IoHandle extends AutoCloseable, Object{
    close(): void;
    handle(arg0: IoRegistration, arg1: IoEvent): void;
    registered(): void;
    unregistered(): void;
}