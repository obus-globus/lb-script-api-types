import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { PointerBuffer } from '../../../../org/lwjgl/PointerBuffer.d.ts'
import type { SharedLibrary } from '../../../../org/lwjgl/system/SharedLibrary.d.ts'
import type { SPVMessageConsumerI } from '../../../../org/lwjgl/util/shaderc/SPVMessageConsumerI.d.ts'
export class SPVOptimizer extends Object {
    static getLibrary(): SharedLibrary;
    static nspvOptimizerRegisterPassFromFlag(paramarg0: number, paramarg1: number): boolean;
    static nspvOptimizerRegisterPassesFromFlags(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static nspvOptimizerRegisterPassesFromFlagsWhilePreservingTheInterface(paramarg0: number, paramarg1: number, paramarg2: number): boolean;
    static nspvOptimizerRun(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static nspvOptimizerSetMessageConsumer(paramarg0: number, paramarg1: number): void;
    static spvOptimizerCreate(paramarg0: number): number;
    static spvOptimizerDestroy(paramarg0: number): void;
    static spvOptimizerRegisterLegalizationPasses(paramarg0: number): void;
    static spvOptimizerRegisterPassFromFlag(paramarg0: number, paramarg1: CharSequence): boolean;
    static spvOptimizerRegisterPassFromFlag(paramarg0: number, paramarg1: ByteBuffer): boolean;
    static spvOptimizerRegisterPassesFromFlags(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static spvOptimizerRegisterPassesFromFlagsWhilePreservingTheInterface(paramarg0: number, paramarg1: PointerBuffer): boolean;
    static spvOptimizerRegisterPerformancePasses(paramarg0: number): void;
    static spvOptimizerRegisterSizePasses(paramarg0: number): void;
    static spvOptimizerRun(paramarg0: number, paramarg1: IntBuffer, paramarg2: PointerBuffer, paramarg3: number): number;
    static spvOptimizerSetMessageConsumer(paramarg0: number, paramarg1: (param0: number, param1: number, param2: number, param3: number) => void): void;
    constructor()
}