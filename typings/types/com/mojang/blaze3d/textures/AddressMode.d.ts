import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class AddressMode extends Enum<AddressMode> {
    static CLAMP_TO_EDGE: AddressMode;
    static REPEAT: AddressMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): AddressMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "REPEAT" | "CLAMP_TO_EDGE";
}