import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Fan$SpeedProperty extends Enum<Win32Fan$SpeedProperty> {
    static DESIREDSPEED: Win32Fan$SpeedProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Win32Fan$SpeedProperty;
    static values(): (Object | null)[];
    private constructor()
    name(): "DESIREDSPEED";
}