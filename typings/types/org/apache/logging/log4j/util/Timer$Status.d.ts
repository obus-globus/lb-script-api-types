import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Timer$Status extends Enum<Timer$Status> {
    static Paused: Timer$Status;
    static Started: Timer$Status;
    static Stopped: Timer$Status;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Timer$Status;
    static values(): Timer$Status[];
    private constructor()
    name(): "Started" | "Stopped" | "Paused";
}