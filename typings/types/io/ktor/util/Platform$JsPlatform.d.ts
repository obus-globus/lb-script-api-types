import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Platform$JsPlatform extends Enum<Platform$JsPlatform> {
    static Browser: Platform$JsPlatform;
    static Node: Platform$JsPlatform;
    static getEntries(): Platform$JsPlatform[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Platform$JsPlatform;
    static values(): Platform$JsPlatform[];
    private constructor()
    name(): "Browser" | "Node";
}