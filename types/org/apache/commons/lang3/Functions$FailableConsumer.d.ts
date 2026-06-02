import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Functions$FailableConsumer<O extends Object | number | string | boolean, T extends Throwable> extends Object{
    accept(arg0: O): void;
}