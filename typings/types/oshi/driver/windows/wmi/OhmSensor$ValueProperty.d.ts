import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OhmSensor$ValueProperty extends Enum<OhmSensor$ValueProperty> {
    static VALUE: OhmSensor$ValueProperty;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OhmSensor$ValueProperty;
    static values(): OhmSensor$ValueProperty[];
    private constructor()
    name(): "VALUE";
}