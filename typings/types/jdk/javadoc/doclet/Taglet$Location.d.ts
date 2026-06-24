import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Taglet$Location extends Enum<Taglet$Location> {
    static CONSTRUCTOR: Taglet$Location;
    static FIELD: Taglet$Location;
    static METHOD: Taglet$Location;
    static MODULE: Taglet$Location;
    static OVERVIEW: Taglet$Location;
    static PACKAGE: Taglet$Location;
    static TYPE: Taglet$Location;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Taglet$Location;
    static values(): (Object | null)[];
    private constructor()
    name(): "OVERVIEW" | "MODULE" | "PACKAGE" | "TYPE" | "CONSTRUCTOR" | "METHOD" | "FIELD";
}