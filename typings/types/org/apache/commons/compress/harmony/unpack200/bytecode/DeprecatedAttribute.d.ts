import type { DataOutputStream } from '../../../../../../../java/io/DataOutputStream.d.ts'
import type { Attribute } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/Attribute.d.ts'
import type { CPUTF8 } from '../../../../../../../org/apache/commons/compress/harmony/unpack200/bytecode/CPUTF8.d.ts'
export class DeprecatedAttribute extends Attribute {
    static setAttributeName(paramarg0: CPUTF8): void;
    constructor()
    getLength(): number;
    toString(): string;
    writeBody(arg0: DataOutputStream): void;
}