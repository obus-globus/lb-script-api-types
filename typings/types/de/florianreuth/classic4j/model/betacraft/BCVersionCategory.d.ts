import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BCVersionCategory extends Enum<BCVersionCategory> {
    static ALPHA: BCVersionCategory;
    static BETA: BCVersionCategory;
    static CLASSIC: BCVersionCategory;
    static INDEV: BCVersionCategory;
    static INFDEV: BCVersionCategory;
    static RELEASE: BCVersionCategory;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): BCVersionCategory;
    static values(): BCVersionCategory[];
    private constructor()
    name(): "RELEASE" | "CLASSIC" | "INDEV" | "INFDEV" | "ALPHA" | "BETA";
}