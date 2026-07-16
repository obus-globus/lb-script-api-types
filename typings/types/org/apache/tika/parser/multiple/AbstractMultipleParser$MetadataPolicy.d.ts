import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class AbstractMultipleParser$MetadataPolicy extends Enum<AbstractMultipleParser$MetadataPolicy> {
    static DISCARD_ALL: AbstractMultipleParser$MetadataPolicy;
    static FIRST_WINS: AbstractMultipleParser$MetadataPolicy;
    static KEEP_ALL: AbstractMultipleParser$MetadataPolicy;
    static LAST_WINS: AbstractMultipleParser$MetadataPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AbstractMultipleParser$MetadataPolicy;
    static values(): AbstractMultipleParser$MetadataPolicy[];
    private constructor()
    name(): "DISCARD_ALL" | "FIRST_WINS" | "LAST_WINS" | "KEEP_ALL";
}