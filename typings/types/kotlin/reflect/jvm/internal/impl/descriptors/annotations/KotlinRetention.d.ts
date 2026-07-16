import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class KotlinRetention extends Enum<KotlinRetention> {
    static BINARY: KotlinRetention;
    static RUNTIME: KotlinRetention;
    static SOURCE: KotlinRetention;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KotlinRetention;
    static values(): KotlinRetention[];
    private constructor()
    name(): "RUNTIME" | "BINARY" | "SOURCE";
}