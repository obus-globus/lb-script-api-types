import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
export interface ThrowableRenderer extends Object{
    renderThrowable(buffer: StringBuilder, throwable: Throwable, lineSeparator: string): void;
}