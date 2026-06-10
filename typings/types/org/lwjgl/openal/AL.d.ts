import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { ALCCapabilities } from '../../../org/lwjgl/openal/ALCCapabilities.d.ts'
import type { ALCapabilities } from '../../../org/lwjgl/openal/ALCapabilities.d.ts'
export class AL extends Object {
    static createCapabilities(paramarg0: ALCCapabilities): ALCapabilities;
    static createCapabilities(paramarg0: ALCCapabilities, paramarg1: (param0: number) => PointerBuffer): ALCapabilities;
    static getCapabilities(): ALCapabilities;
    static setCurrentProcess(paramarg0: ALCapabilities): void;
    static setCurrentThread(paramarg0: ALCapabilities): void;
    private constructor()
}