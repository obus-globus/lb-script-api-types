import type { BytecodeConfig } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfig.d.ts'
import type { BytecodeConfigEncoder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfigEncoder.d.ts'
import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeConfig$Builder extends Object {
    constructor(encoder: BytecodeConfigEncoder)
    // private encoder: BytecodeConfigEncoder;
    // private encoding: number;
    addInstrumentation(instrumentation: Class<Object>): BytecodeConfig$Builder;
    addSource(): BytecodeConfig$Builder;
    addTag(tag: Class<Tag>): BytecodeConfig$Builder;
    build(): BytecodeConfig;
}