import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { ALCCapabilities } from '../../../org/lwjgl/openal/ALCCapabilities.d.ts'
import type { FunctionProviderLocal } from '../../../org/lwjgl/system/FunctionProviderLocal.d.ts'
export class ALC extends Object {
    static create(): void;
    static create(paramarg0: string): void;
    static create(paramarg0: FunctionProviderLocal): void;
    static createCapabilities(paramarg0: number): ALCCapabilities;
    static createCapabilities(paramarg0: number, paramarg1: (param0: number) => PointerBuffer): ALCCapabilities;
    static destroy(): void;
    static getCapabilities(): ALCCapabilities;
    static getFunctionProvider(): FunctionProviderLocal;
    static setCapabilities(paramarg0: ALCCapabilities): void;
    private constructor()
}