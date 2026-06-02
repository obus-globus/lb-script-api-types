import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { Marker } from '../../../org/slf4j/Marker.d.ts'
export interface LoggingEventBuilder extends Object{
    addArgument(arg0: () => Object | null): LoggingEventBuilder;
    addArgument(arg0: Object): LoggingEventBuilder;
    addKeyValue(arg0: string, arg1: () => Object): LoggingEventBuilder;
    addKeyValue(arg0: string, arg1: Object): LoggingEventBuilder;
    addMarker(arg0: Marker): LoggingEventBuilder;
    log(): void;
    log(arg0: () => string): void;
    log(arg0: string): void;
    log(arg0: string, arg1: Object): void;
    log(arg0: string, arg1: Object, arg2: Object): void;
    log(arg0: string, arg1: Object[]): void;
    setCause(arg0: Throwable): LoggingEventBuilder;
    setMessage(arg0: () => string): LoggingEventBuilder;
    setMessage(arg0: string): LoggingEventBuilder;
}