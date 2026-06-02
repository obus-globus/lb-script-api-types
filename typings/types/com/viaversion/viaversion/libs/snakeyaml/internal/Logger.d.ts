import type { Logger$Level } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/internal/Logger$Level.d.ts'
import type { System$Logger } from '../../../../../../java/lang/System$Logger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Logger extends Object {
    static getLogger(paramarg0: string): Logger;
    private constructor(arg0: string)
    // private logger: System$Logger;
    debug(arg0: string): void;
    isLoggable(arg0: Logger$Level): boolean;
    warn(arg0: string): void;
}