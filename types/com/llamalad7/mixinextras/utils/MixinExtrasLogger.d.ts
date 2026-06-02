import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface MixinExtrasLogger extends Object{
    debug(arg0: string, arg1: Object[]): void;
    error(arg0: string, arg1: Throwable): void;
    info(arg0: string, arg1: Object[]): void;
    warn(arg0: string, arg1: Object[]): void;
}