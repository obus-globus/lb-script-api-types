import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class StatusDisplayType extends Enum<StatusDisplayType> {
    static Details: StatusDisplayType;
    static Name: StatusDisplayType;
    static State: StatusDisplayType;
    static from(paramarg0: number): StatusDisplayType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): StatusDisplayType;
    static values(): StatusDisplayType[];
    private constructor()
    name(): "Name" | "State" | "Details";
}