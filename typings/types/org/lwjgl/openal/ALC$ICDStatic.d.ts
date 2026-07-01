import type { Object } from '../../../java/lang/Object.d.ts'
import type { ALC$ICD } from '../../../org/lwjgl/openal/ALC$ICD.d.ts'
import type { ALCCapabilities } from '../../../org/lwjgl/openal/ALCCapabilities.d.ts'
export class ALC$ICDStatic extends Object implements ALC$ICD {
    constructor(arg0: any)
    get(): ALCCapabilities;
    set(arg0: ALCCapabilities): void;
}