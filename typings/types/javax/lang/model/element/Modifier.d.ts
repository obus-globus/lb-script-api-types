import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Modifier extends Enum<Modifier> {
    static ABSTRACT: Modifier;
    static DEFAULT: Modifier;
    static FINAL: Modifier;
    static NATIVE: Modifier;
    static NON_SEALED: Modifier;
    static PRIVATE: Modifier;
    static PROTECTED: Modifier;
    static PUBLIC: Modifier;
    static SEALED: Modifier;
    static STATIC: Modifier;
    static STRICTFP: Modifier;
    static SYNCHRONIZED: Modifier;
    static TRANSIENT: Modifier;
    static VOLATILE: Modifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Modifier;
    static values(): Modifier[];
    private constructor()
    toString(): string;
    name(): "PUBLIC" | "PROTECTED" | "PRIVATE" | "ABSTRACT" | "DEFAULT" | "STATIC" | "SEALED" | "NON_SEALED" | "FINAL" | "TRANSIENT" | "VOLATILE" | "SYNCHRONIZED" | "NATIVE" | "STRICTFP";
}