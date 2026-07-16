import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class UpdateChannel extends Enum<UpdateChannel> {
    static ALPHA: UpdateChannel;
    static BETA: UpdateChannel;
    static RELEASE: UpdateChannel;
    static getUserPreference(): UpdateChannel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UpdateChannel;
    static values(): UpdateChannel[];
    private constructor()
    name(): "ALPHA" | "BETA" | "RELEASE";
}