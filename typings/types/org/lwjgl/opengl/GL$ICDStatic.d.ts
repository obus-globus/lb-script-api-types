import type { Object } from '../../../java/lang/Object.d.ts'
import type { GL$ICD } from '../../../org/lwjgl/opengl/GL$ICD.d.ts'
import type { GLCapabilities } from '../../../org/lwjgl/opengl/GLCapabilities.d.ts'
export class GL$ICDStatic extends Object implements GL$ICD {
    private constructor()
    get(): GLCapabilities;
    set(arg0: GLCapabilities): void;
}