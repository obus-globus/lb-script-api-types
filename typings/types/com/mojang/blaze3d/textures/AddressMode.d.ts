import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AddressMode extends Enum<AddressMode> {
    static CLAMP_TO_EDGE: AddressMode;
    static REPEAT: AddressMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): AddressMode;
    static values(): AddressMode[];
    private constructor()
    name(): "REPEAT" | "CLAMP_TO_EDGE";
}