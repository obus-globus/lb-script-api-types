import type { AL$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { AL$ICD } from '../../../org/lwjgl/openal/AL$ICD.d.ts'
import type { ALCapabilities } from '../../../org/lwjgl/openal/ALCapabilities.d.ts'
export class AL$ICDStatic extends Object implements AL$ICD {
    private constructor()
    constructor(arg0: AL$1)
    get(): ALCapabilities;
    set(arg0: ALCapabilities): void;
}