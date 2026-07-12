import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TrLogger$Level } from '../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrLogger$Level.d.ts'
export interface TrLogger extends Object{
    error(arg0: string): void;
    error(arg0: string, ...arg1: Object[]): void;
    log(arg0: TrLogger$Level, arg1: string): void;
    log(arg0: TrLogger$Level, arg1: string, ...arg2: Object[]): void;
    warn(arg0: string): void;
    warn(arg0: string, ...arg1: Object[]): void;
}