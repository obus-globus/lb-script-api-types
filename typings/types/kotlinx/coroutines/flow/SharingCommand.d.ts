import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SharingCommand extends Enum<SharingCommand> {
    static START: SharingCommand;
    static STOP: SharingCommand;
    static STOP_AND_RESET_REPLAY_CACHE: SharingCommand;
    static getEntries(): SharingCommand[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SharingCommand;
    static values(): SharingCommand[];
    private constructor()
    name(): "START" | "STOP" | "STOP_AND_RESET_REPLAY_CACHE";
}