import type { GL$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GL$ICD } from '../../../org/lwjgl/opengl/GL$ICD.d.ts'
import type { GLCapabilities } from '../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export class GL$ICDStatic extends Object implements GL$ICD {
    private constructor()
    constructor(arg0: GL$1)
    get(): GLCapabilities;
    set(arg0: GLCapabilities): void;
}