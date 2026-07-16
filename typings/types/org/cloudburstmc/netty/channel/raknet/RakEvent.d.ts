import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RakEvent extends Enum<RakEvent> {
    static NEW_INCOMING_CONNECTION: RakEvent;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RakEvent;
    static values(): RakEvent[];
    private constructor()
    name(): "NEW_INCOMING_CONNECTION";
}