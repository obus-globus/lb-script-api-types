import type { BytecodeBuilder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeBuilder.d.ts'
import type { BytecodeConfig } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfig.d.ts'
import type { BytecodeConfigEncoder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfigEncoder.d.ts'
import type { BytecodeParser } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeParser.d.ts'
import type { BytecodeRootNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { InstructionTracer } from '../../../../../com/oracle/truffle/api/bytecode/InstructionTracer.d.ts'
import type { BytecodeSerializer } from '../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeSerializer.d.ts'
import type { BytecodeSerializer$SerializerContext } from '../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeSerializer$SerializerContext.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { DataOutput } from '../../../../../java/io/DataOutput.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BytecodeRootNodes<T extends RootNode & BytecodeRootNode> extends Object {
    constructor(token: Object, parser: (param0: BytecodeBuilder) => void)
    nodes: T[];
    // private parser: (param0: BytecodeBuilder) => void;
    addInstructionTracer(tracer: InstructionTracer): void;
    count(): number;
    ensureComplete(): boolean;
    ensureSourceInformation(): boolean;
    ensureSourceInformationWithContent(): boolean;
    getNode(i: number): T;
    getNodes(): T[];
    getParser(): (param0: BytecodeBuilder) => void;
    removeInstructionTracer(tracer: InstructionTracer): void;
    serialize(buffer: DataOutput, callback: (param0: BytecodeSerializer$SerializerContext, param1: DataOutput, param2: Object) => void): void;
    toString(): string;
    update(config: BytecodeConfig): boolean;
    updateGlobalInstructionTracers(tracers: InstructionTracer[]): void;
    updateImpl(encoder: BytecodeConfigEncoder, encoding: number): boolean;
}