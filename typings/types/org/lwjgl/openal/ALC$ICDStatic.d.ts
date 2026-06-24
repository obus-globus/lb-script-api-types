import type { ALC$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ALC$ICD } from '../../../org/lwjgl/openal/ALC$ICD.d.ts'
import type { ALCCapabilities } from '../../../org/lwjgl/openal/ALCCapabilities.d.ts'
export class ALC$ICDStatic extends Object implements ALC$ICD {
    private constructor()
    constructor(arg0: ALC$1)
    get(): ALCCapabilities;
    set(arg0: ALCCapabilities): void;
}