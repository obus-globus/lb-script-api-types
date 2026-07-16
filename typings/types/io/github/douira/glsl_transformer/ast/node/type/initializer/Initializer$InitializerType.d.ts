import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class Initializer$InitializerType extends Enum<Initializer$InitializerType> {
    static EXPRESSION: Initializer$InitializerType;
    static NESTED: Initializer$InitializerType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Initializer$InitializerType;
    static values(): Initializer$InitializerType[];
    private constructor()
    name(): "EXPRESSION" | "NESTED";
}