import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ApplicationConfigValue$Type extends Enum<ApplicationConfigValue$Type> {
    static LIST: ApplicationConfigValue$Type;
    static NULL: ApplicationConfigValue$Type;
    static OBJECT: ApplicationConfigValue$Type;
    static SINGLE: ApplicationConfigValue$Type;
    static getEntries(): ApplicationConfigValue$Type[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ApplicationConfigValue$Type;
    static values(): ApplicationConfigValue$Type[];
    private constructor()
    name(): "NULL" | "SINGLE" | "LIST" | "OBJECT";
}