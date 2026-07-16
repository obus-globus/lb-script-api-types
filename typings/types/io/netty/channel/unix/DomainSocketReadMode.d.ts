import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DomainSocketReadMode extends Enum<DomainSocketReadMode> {
    static BYTES: DomainSocketReadMode;
    static FILE_DESCRIPTORS: DomainSocketReadMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DomainSocketReadMode;
    static values(): DomainSocketReadMode[];
    private constructor()
    name(): "BYTES" | "FILE_DESCRIPTORS";
}