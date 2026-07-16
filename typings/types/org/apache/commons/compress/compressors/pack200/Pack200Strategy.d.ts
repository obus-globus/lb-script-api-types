import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { AbstractStreamBridge } from '../../../../../../org/apache/commons/compress/compressors/pack200/AbstractStreamBridge.d.ts'
export class Pack200Strategy extends Enum<Pack200Strategy> {
    static IN_MEMORY: Pack200Strategy;
    static TEMP_FILE: Pack200Strategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Pack200Strategy;
    static values(): Pack200Strategy[];
    constructor(arg2: Pack200Strategy)
    newStreamBridge(): AbstractStreamBridge;
    name(): "IN_MEMORY" | "TEMP_FILE";
}