import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class KVisibility extends Enum<KVisibility> implements Serializable {
    static INTERNAL: KVisibility;
    static PRIVATE: KVisibility;
    static PROTECTED: KVisibility;
    static PUBLIC: KVisibility;
    static getEntries(): KVisibility[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): KVisibility;
    static values(): KVisibility[];
    private constructor()
    name(): "PUBLIC" | "PROTECTED" | "INTERNAL" | "PRIVATE";
}