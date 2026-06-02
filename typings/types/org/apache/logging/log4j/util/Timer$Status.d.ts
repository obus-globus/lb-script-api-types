import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Timer$Status extends Enum<Timer$Status> {
    static Paused: Timer$Status;
    static Started: Timer$Status;
    static Stopped: Timer$Status;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Timer$Status;
    static values(): (Object | null)[];
    private constructor()
    name(): "Started" | "Stopped" | "Paused";
}