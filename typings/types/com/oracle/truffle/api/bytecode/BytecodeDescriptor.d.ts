import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { BytecodeBuilder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeBuilder.d.ts'
import type { BytecodeConfig } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfig.d.ts'
import type { BytecodeConfig$Builder } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeConfig$Builder.d.ts'
import type { BytecodeEngineData$DescriptorData } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeEngineData$DescriptorData.d.ts'
import type { BytecodeParser } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeParser.d.ts'
import type { BytecodeRootNode } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNode.d.ts'
import type { BytecodeRootNodes } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeRootNodes.d.ts'
import type { BytecodeTransition } from '../../../../../com/oracle/truffle/api/bytecode/BytecodeTransition.d.ts'
import type { InstructionDescriptor } from '../../../../../com/oracle/truffle/api/bytecode/InstructionDescriptor.d.ts'
import type { InstructionTracer } from '../../../../../com/oracle/truffle/api/bytecode/InstructionTracer.d.ts'
import type { BytecodeDeserializer } from '../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeDeserializer.d.ts'
import type { BytecodeDeserializer$DeserializerContext } from '../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeDeserializer$DeserializerContext.d.ts'
import type { BytecodeSerializer } from '../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeSerializer.d.ts'
import type { BytecodeSerializer$SerializerContext } from '../../../../../com/oracle/truffle/api/bytecode/serialization/BytecodeSerializer$SerializerContext.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { DataInput } from '../../../../../java/io/DataInput.d.ts'
import type { DataOutput } from '../../../../../java/io/DataOutput.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BytecodeDescriptor<R extends RootNode & BytecodeRootNode, L extends TruffleLanguage<Object>, B extends BytecodeBuilder> extends Object {
    constructor(token: Object)
    // private descriptorLookupEnabled: boolean;
    addInstructionTracer(language: L, tracer: InstructionTracer): void;
    cast(target: CallTarget): R;
    cast(rootNode: RootNode): R;
    create(language: L, config: BytecodeConfig, parser: (param0: B) => void): BytecodeRootNodes<R>;
    deserialize(language: L, config: BytecodeConfig, input: () => DataInput, callback: (param0: BytecodeDeserializer$DeserializerContext, param1: DataInput) => Object): BytecodeRootNodes<R>;
    dump(): string;
    enableDescriptorLookup(): void;
    // private getDescriptorData(language: TruffleLanguage<Object>): BytecodeEngineData$DescriptorData;
    getGeneratedClass(): Class<R>;
    getInstructionDescriptor(operationCode: number): InstructionDescriptor;
    getInstructionDescriptors(): InstructionDescriptor[];
    getLanguageClass(): Class<L>;
    getSpecificationClass(): Class<R>;
    // private isDescriptorLookupEnabled(language: TruffleLanguage<Object>): boolean;
    newConfigBuilder(): BytecodeConfig$Builder;
    onPrepareForLoad(language: TruffleLanguage<Object>, rootNode: R): void;
    onTransition(language: TruffleLanguage<Object>, rootNode: R, transition: BytecodeTransition): void;
    removeInstructionTracer(language: L, tracer: InstructionTracer): void;
    serialize(buffer: DataOutput, callback: (param0: BytecodeSerializer$SerializerContext, param1: DataOutput, param2: Object) => void, parser: (param0: B) => void): void;
    toString(): string;
    update(language: L, config: BytecodeConfig): void;
    withGlobalConfig(language: TruffleLanguage<Object>, config: number): number;
}