import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class UpdateType extends Enum<UpdateType> {
    static ADD: UpdateType;
    static REMOVE: UpdateType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): UpdateType;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADD" | "REMOVE";
}