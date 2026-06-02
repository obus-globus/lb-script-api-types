import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DomainSocketReadMode extends Enum<DomainSocketReadMode> {
    static BYTES: DomainSocketReadMode;
    static FILE_DESCRIPTORS: DomainSocketReadMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DomainSocketReadMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "BYTES" | "FILE_DESCRIPTORS";
}