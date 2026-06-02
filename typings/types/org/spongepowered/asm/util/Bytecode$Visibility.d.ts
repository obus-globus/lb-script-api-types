import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Bytecode$Visibility extends Enum<Bytecode$Visibility> {
    static PACKAGE: Bytecode$Visibility;
    static PRIVATE: Bytecode$Visibility;
    static PROTECTED: Bytecode$Visibility;
    static PUBLIC: Bytecode$Visibility;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Bytecode$Visibility;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private access: number;
    isAtLeast(arg0: Bytecode$Visibility): boolean;
    isLessThan(arg0: Bytecode$Visibility): boolean;
    name(): "PRIVATE" | "PROTECTED" | "PACKAGE" | "PUBLIC";
}