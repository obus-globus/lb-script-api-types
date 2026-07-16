import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ComponentsUpdateEvent$Source extends Enum<ComponentsUpdateEvent$Source> {
    static NATIVE: ComponentsUpdateEvent$Source;
    static THEME: ComponentsUpdateEvent$Source;
    static getEntries(): ComponentsUpdateEvent$Source[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ComponentsUpdateEvent$Source;
    static values(): ComponentsUpdateEvent$Source[];
    private constructor()
    name(): "NATIVE" | "THEME";
}