import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ActivityType extends Enum<ActivityType> {
    static Competing: ActivityType;
    static Custom: ActivityType;
    static Listening: ActivityType;
    static Playing: ActivityType;
    static Streaming: ActivityType;
    static Watching: ActivityType;
    static from(paramarg0: number): ActivityType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ActivityType;
    static values(): (Object | null)[];
    private constructor()
    name(): "Playing" | "Streaming" | "Listening" | "Watching" | "Custom" | "Competing";
}