import type { BytecodeConfig } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfig.d.ts'
import type { BytecodeConfigEncoder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfigEncoder.d.ts'
import type { BytecodeDescriptor } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { BytecodeEngineData } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeEngineData.d.ts'
import type { BytecodeRootNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { InstructionTracer } from '../../../../../com/oracle/truffle/api/bytecode/InstructionTracer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeEngineData$DescriptorData extends Object {
    constructor(bytecodeData: BytecodeEngineData, descriptor: BytecodeDescriptor<any, any, any>)
    // private bytecodeData: BytecodeEngineData;
    // private configEncoder: BytecodeConfigEncoder;
    // private descriptor: BytecodeDescriptor<any, any, any>;
    // private descriptorConfig: number;
    // private descriptorTracers: InstructionTracer[];
    // private traceInstructionEncoding: number;
    addInstructionTracer(tracer: InstructionTracer): void;
    // private forEachLoadedBytecodeRoot(action: (param0: BytecodeRootNode) => void): void;
    onPrepareForCall(rootNode: BytecodeRootNode): void;
    removeInstructionTracer(tracer: InstructionTracer): void;
    updateBytecodeConfig(config: number): number;
    updateConfig(config: BytecodeConfig): void;
    // private updateConfigImpl(newEncoding: number): void;
    // private updateRootNode(rootNode: BytecodeRootNode): void;
    // private updateTracers(update: InstructionTracer[]): void;
}