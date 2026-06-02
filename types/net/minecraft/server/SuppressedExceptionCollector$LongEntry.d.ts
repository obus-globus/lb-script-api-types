import type { Class } from '../../../java/lang/Class.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class SuppressedExceptionCollector$LongEntry extends Record {
    // private cls: Class<Throwable>;
    // private location: string;
    // private message: string;
    // private timestampMs: number;
    cls(): Class<Throwable>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    location(): string;
    message(): string;
    timestampMs(): number;
    toString(): string;
}