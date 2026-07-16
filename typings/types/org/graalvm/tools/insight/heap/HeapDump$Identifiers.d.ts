import type { DataOutputStream } from '../../../../../java/io/DataOutputStream.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class HeapDump$Identifiers extends Enum<HeapDump$Identifiers> {
    static EIGHT: HeapDump$Identifiers;
    static FOUR: HeapDump$Identifiers;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): HeapDump$Identifiers;
    static values(): HeapDump$Identifiers[];
    private constructor()
    sizeOf(): number;
    writeID(os: DataOutputStream, id: number): void;
    name(): "FOUR" | "EIGHT";
}