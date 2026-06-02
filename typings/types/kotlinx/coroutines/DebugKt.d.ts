import type { AtomicLong } from '../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class DebugKt extends Object {
    static DEBUG_PROPERTY_NAME: string;
    static DEBUG_PROPERTY_VALUE_AUTO: string;
    static DEBUG_PROPERTY_VALUE_OFF: string;
    static DEBUG_PROPERTY_VALUE_ON: string;
    static STACKTRACE_RECOVERY_PROPERTY_NAME: string;
    static getASSERTIONS_ENABLED(): boolean;
    static getCOROUTINE_ID(): AtomicLong;
    static getDEBUG(): boolean;
    static getRECOVER_STACK_TRACES(): boolean;
    static resetCoroutineId(): void;
}