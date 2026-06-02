import type { Closeable } from '../../../../../../../java/io/Closeable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../../java/lang/Throwable.d.ts'
export interface Closer$Suppressor extends Object{
    suppress(arg0: Closeable, arg1: Throwable, arg2: Throwable): void;
}