import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class ThreadLocalUtil extends Object {
    static areCapabilitiesDifferent(paramarg0: PointerBuffer, paramarg1: PointerBuffer): boolean;
    static setCapabilities(paramarg0: number): void;
    static setFunctionMissingAddresses(paramarg0: number): void;
    static setupAddressBuffer(paramarg0: PointerBuffer): PointerBuffer;
    private constructor()
}