import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Toggle extends Enum<Toggle> {
    static OFF: Toggle;
    static ON: Toggle;
    static fromBoolean(paramarg0: boolean): Toggle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Toggle;
    static values(): Toggle[];
    private constructor()
    toBoolean(): boolean;
    name(): "OFF" | "ON";
}