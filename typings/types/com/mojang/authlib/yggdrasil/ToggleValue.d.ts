import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ToggleValue extends Enum<ToggleValue> {
    static DISABLED: ToggleValue;
    static ENABLED: ToggleValue;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ToggleValue;
    static values(): ToggleValue[];
    private constructor()
    isDisabled(): boolean;
    isEnabled(): boolean;
    name(): "DISABLED" | "ENABLED";
}