import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { KotlinClassHeader$Kind$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/load/kotlin/header/KotlinClassHeader$Kind$Companion.d.ts'
export class KotlinClassHeader$Kind extends Enum<KotlinClassHeader$Kind> {
    static CLASS: KotlinClassHeader$Kind;
    static Companion: KotlinClassHeader$Kind$Companion;
    static FILE_FACADE: KotlinClassHeader$Kind;
    static MULTIFILE_CLASS: KotlinClassHeader$Kind;
    static MULTIFILE_CLASS_PART: KotlinClassHeader$Kind;
    static SYNTHETIC_CLASS: KotlinClassHeader$Kind;
    static UNKNOWN: KotlinClassHeader$Kind;
    static getById(paramarg0: number): KotlinClassHeader$Kind;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KotlinClassHeader$Kind;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private id: number;
    name(): "UNKNOWN" | "CLASS" | "FILE_FACADE" | "SYNTHETIC_CLASS" | "MULTIFILE_CLASS" | "MULTIFILE_CLASS_PART";
}