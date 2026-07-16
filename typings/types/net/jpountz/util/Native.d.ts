import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Native extends Enum<Native> {
    static isLoaded(): boolean;
    static load(): void;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Native;
    static values(): Native[];
    private constructor()
}