import type { InformativeException$DataEntry } from '../../../../com/viaversion/viaversion/exception/InformativeException$DataEntry.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { RuntimeException } from '../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class InformativeException extends RuntimeException {
    constructor(arg0: Throwable)
    // private dataEntries: InformativeException$DataEntry[];
    readonly message: string | null;
    // private sources: number;
    addSource(arg0: Class<Object>): InformativeException;
    fillInStackTrace(): Throwable;
    // private getSource(arg0: Class<Object>): string;
    set(arg0: string, arg1: Object): InformativeException;
    setShouldBePrinted(arg0: boolean): void;
    shouldBePrinted(): boolean;
}