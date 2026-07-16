import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OhmSensor$ValueProperty extends Enum<OhmSensor$ValueProperty> {
    static VALUE: OhmSensor$ValueProperty;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OhmSensor$ValueProperty;
    static values(): OhmSensor$ValueProperty[];
    private constructor()
    name(): "VALUE";
}