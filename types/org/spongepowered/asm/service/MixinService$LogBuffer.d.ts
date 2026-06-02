import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ILogger } from '../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { MixinService$LogBuffer$LogEntry } from '../../../../org/spongepowered/asm/service/MixinService$LogBuffer$LogEntry.d.ts'
export class MixinService$LogBuffer extends Object {
    constructor()
    // private buffer: MixinService$LogBuffer$LogEntry[];
    // private logger: ILogger;
    debug(arg0: string, arg1: Object[]): void;
    flush(arg0: ILogger): void;
}