import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { FlagImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/FlagImpl.d.ts'
export class Visibility extends Enum<Visibility> {
    static INTERNAL: Visibility;
    static LOCAL: Visibility;
    static PRIVATE: Visibility;
    static PRIVATE_TO_THIS: Visibility;
    static PROTECTED: Visibility;
    static PUBLIC: Visibility;
    static getEntries(): Visibility[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Visibility;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private flag: FlagImpl;
    getFlag$org_jetbrains_kotlin_kotlin_metadata(): FlagImpl;
    name(): "INTERNAL" | "PRIVATE" | "PROTECTED" | "PUBLIC" | "PRIVATE_TO_THIS" | "LOCAL";
}