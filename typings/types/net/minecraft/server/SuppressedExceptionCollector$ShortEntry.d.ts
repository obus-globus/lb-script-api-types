import type { Class } from '../../../java/lang/Class.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class SuppressedExceptionCollector$ShortEntry extends Record {
    private constructor(location: string, cls: Class<Throwable>)
    // private cls: Class<Throwable>;
    // private location: string;
    cls(): Class<Throwable>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    location(): string;
    toString(): string;
}