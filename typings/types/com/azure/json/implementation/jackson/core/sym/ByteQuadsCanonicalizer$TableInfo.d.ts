import type { ByteQuadsCanonicalizer } from '../../../../../../../com/azure/json/implementation/jackson/core/sym/ByteQuadsCanonicalizer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ByteQuadsCanonicalizer$TableInfo extends Object {
    static createInitial(paramarg0: number): ByteQuadsCanonicalizer$TableInfo;
    constructor(arg0: ByteQuadsCanonicalizer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number[], arg4: string[], arg5: number, arg6: number)
    count: number;
    longNameOffset: number;
    mainHash: number[];
    names: string[];
    size: number;
    spilloverEnd: number;
    tertiaryShift: number;
}