import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HeapDump$Identifiers extends Enum<HeapDump$Identifiers> {
    static EIGHT: HeapDump$Identifiers;
    static FOUR: HeapDump$Identifiers;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): HeapDump$Identifiers;
    static values(): (Object | null)[];
    private constructor()
    sizeOf(): number;
    writeID(os: DataOutputStream, id: number): void;
    name(): "FOUR" | "EIGHT";
}