import type { BytecodeDescriptor } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeDescriptor.d.ts'
import type { BytecodeEngineData$DescriptorData } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeEngineData$DescriptorData.d.ts'
import type { BytecodeRootNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { BytecodeTransition } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeTransition.d.ts'
import type { InstructionTracer } from '../../../../../com/oracle/truffle/api/bytecode/InstructionTracer.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeEngineData extends Object {
    constructor(sharingLayer: Object)
    // private descriptorData: Map<BytecodeDescriptor<any, any, any>, BytecodeEngineData$DescriptorData>;
    // private engineTracerFactories: Map<(param0: BytecodeDescriptor<any, any, any>) => InstructionTracer, Map<BytecodeDescriptor<any, any, any>, InstructionTracer>>;
    // private sharingLayer: Object;
    // private transitionLogger: (param0: BytecodeRootNode, param1: BytecodeTransition) => void;
    addEngineTracerFactory(tracerFactory: (param0: BytecodeDescriptor<any, any, any>) => InstructionTracer): void;
    getDescriptor(descriptor: BytecodeDescriptor<any, any, any>): BytecodeEngineData$DescriptorData;
    getEngineInstructionTracers(tracerFactory: (param0: BytecodeDescriptor<any, any, any>) => InstructionTracer): InstructionTracer[];
    // private initializeDescriptor(descriptor: BytecodeDescriptor<any, any, any>): BytecodeEngineData$DescriptorData;
    setTransitionLogger(logger: (param0: BytecodeRootNode, param1: BytecodeTransition) => void): void;
    traceTransition(rootNode: BytecodeRootNode, transition: BytecodeTransition): void;
}