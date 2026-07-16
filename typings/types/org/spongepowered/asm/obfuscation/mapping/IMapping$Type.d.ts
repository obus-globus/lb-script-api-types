import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class IMapping$Type extends Enum<IMapping$Type> {
    static CLASS: IMapping$Type;
    static FIELD: IMapping$Type;
    static METHOD: IMapping$Type;
    static PACKAGE: IMapping$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): IMapping$Type;
    static values(): IMapping$Type[];
    private constructor()
    name(): "FIELD" | "METHOD" | "CLASS" | "PACKAGE";
}