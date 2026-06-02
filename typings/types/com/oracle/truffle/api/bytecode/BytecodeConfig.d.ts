import type { BytecodeConfig$Builder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfig$Builder.d.ts'
import type { BytecodeConfigEncoder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfigEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeConfig extends Object {
    static COMPLETE: BytecodeConfig;
    static DEFAULT: BytecodeConfig;
    static WITH_SOURCE: BytecodeConfig;
    static newBuilder(paramencoder: BytecodeConfigEncoder): BytecodeConfig$Builder;
    constructor(encoder: BytecodeConfigEncoder, encoding: number)
    // private encoder: BytecodeConfigEncoder;
    // private encoding: number;
}