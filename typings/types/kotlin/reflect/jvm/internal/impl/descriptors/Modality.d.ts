import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Modality$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality$Companion.d.ts'
export class Modality extends Enum<Modality> {
    static ABSTRACT: Modality;
    static Companion: Modality$Companion;
    static FINAL: Modality;
    static OPEN: Modality;
    static SEALED: Modality;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Modality;
    static values(): Modality[];
    private constructor()
    name(): "FINAL" | "SEALED" | "OPEN" | "ABSTRACT";
}