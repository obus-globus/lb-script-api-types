import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Win32Fan$SpeedProperty extends Enum<Win32Fan$SpeedProperty> {
    static DESIREDSPEED: Win32Fan$SpeedProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Win32Fan$SpeedProperty;
    static values(): Win32Fan$SpeedProperty[];
    private constructor()
    name(): "DESIREDSPEED";
}