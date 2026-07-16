import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class Normalizer$Form extends Enum<Normalizer$Form> {
    static NFC: Normalizer$Form;
    static NFD: Normalizer$Form;
    static NFKC: Normalizer$Form;
    static NFKD: Normalizer$Form;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Normalizer$Form;
    static values(): Normalizer$Form[];
    private constructor()
    name(): "NFD" | "NFC" | "NFKD" | "NFKC";
}