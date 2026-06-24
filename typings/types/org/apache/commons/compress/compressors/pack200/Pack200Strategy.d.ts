import type { Pack200Strategy$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { AbstractStreamBridge } from '../../../../../../org/apache/commons/compress/compressors/pack200/AbstractStreamBridge.d.ts'
export class Pack200Strategy extends Enum<Pack200Strategy> {
    static IN_MEMORY: Pack200Strategy;
    static TEMP_FILE: Pack200Strategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Pack200Strategy;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: Pack200Strategy$1)
    newStreamBridge(): AbstractStreamBridge;
    name(): "IN_MEMORY" | "TEMP_FILE";
}