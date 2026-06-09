import type { System$Logger$Level } from '../../java/lang/System$Logger$Level.d.ts'
import type { ResourceBundle } from '../../java/util/ResourceBundle.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
export interface System$Logger extends Object {
    getName(): string;
    isLoggable(arg0: System$Logger$Level): boolean;
    log(arg0: System$Logger$Level, arg1: ResourceBundle, arg2: string, arg3: Object[]): void;
    log(arg0: System$Logger$Level, arg1: ResourceBundle, arg2: string, arg3: Throwable): void;
    log(arg0: System$Logger$Level, arg1: () => string): void;
    log(arg0: System$Logger$Level, arg1: () => string, arg2: Throwable): void;
    log(arg0: System$Logger$Level, arg1: Object): void;
    log(arg0: System$Logger$Level, arg1: string): void;
    log(arg0: System$Logger$Level, arg1: string, arg2: Object[]): void;
    log(arg0: System$Logger$Level, arg1: string, arg2: Throwable): void;
}