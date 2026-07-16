import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ActivityType extends Enum<ActivityType> {
    static Competing: ActivityType;
    static Custom: ActivityType;
    static Listening: ActivityType;
    static Playing: ActivityType;
    static Streaming: ActivityType;
    static Watching: ActivityType;
    static from(paramarg0: number): ActivityType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ActivityType;
    static values(): ActivityType[];
    private constructor()
    name(): "Playing" | "Streaming" | "Listening" | "Watching" | "Custom" | "Competing";
}