import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Initializer$InitializerType extends Enum<Initializer$InitializerType> {
    static EXPRESSION: Initializer$InitializerType;
    static NESTED: Initializer$InitializerType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Initializer$InitializerType;
    static values(): Initializer$InitializerType[];
    private constructor()
    name(): "EXPRESSION" | "NESTED";
}