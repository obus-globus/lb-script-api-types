import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Native extends Enum<Native> {
    static isLoaded(): boolean;
    static load(): void;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Native;
    static values(): (Object | null)[];
    private constructor()
}