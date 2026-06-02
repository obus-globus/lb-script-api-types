import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
export abstract class BCIRenumberedAttribute extends Attribute {
    constructor(arg0: CPUTF8)
    // private renumbered: boolean;
    getLength(): number;
    getStartPCs(): number[];
    hasBCIRenumbering(): boolean;
    renumber(arg0: number[]): void;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}