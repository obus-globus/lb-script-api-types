import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class SharingCommand extends Enum<SharingCommand> {
    static START: SharingCommand;
    static STOP: SharingCommand;
    static STOP_AND_RESET_REPLAY_CACHE: SharingCommand;
    static getEntries(): SharingCommand[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SharingCommand;
    static values(): (Object | null)[];
    private constructor()
    name(): "START" | "STOP" | "STOP_AND_RESET_REPLAY_CACHE";
}