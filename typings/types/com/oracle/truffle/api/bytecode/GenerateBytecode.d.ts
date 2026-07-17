import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface GenerateBytecode extends Annotation, Object{
    /*not mapped: */ additionalAssertions(): boolean;
    /*not mapped: */ allowUnsafe(): boolean;
    /*not mapped: */ boxingEliminationTypes(): KClass<Object>[];
    /*not mapped: */ captureFramesForTrace(): boolean;
    /*not mapped: */ defaultLocalValue(): string;
    /*not mapped: */ defaultUncachedThreshold(): string;
    /*not mapped: */ enableBlockScoping(): boolean;
    /*not mapped: */ enableBytecodeDebugListener(): boolean;
    /*not mapped: */ enableInstructionRewriting(): boolean;
    /*not mapped: */ enableInstructionTracing(): boolean;
    /*not mapped: */ enableMaterializedLocalAccesses(): boolean;
    /*not mapped: */ enableQuickening(): boolean;
    /*not mapped: */ enableRootBodyTagging(): boolean;
    /*not mapped: */ enableRootTagging(): boolean;
    /*not mapped: */ enableSerialization(): boolean;
    /*not mapped: */ enableSpecializationIntrospection(): boolean;
    /*not mapped: */ enableTagInstrumentation(): boolean;
    /*not mapped: */ enableTailCallHandlers(): boolean;
    /*not mapped: */ enableThreadedSwitch(): boolean;
    /*not mapped: */ enableUncachedInterpreter(): boolean;
    /*not mapped: */ enableYield(): boolean;
    /*not mapped: */ illegalLocalException(): KClass<RuntimeException>;
    /*not mapped: */ illegalLocalExceptionFactory(): string;
    /*not mapped: */ inlinePrimitiveConstants(): boolean;
    /*not mapped: */ languageClass(): KClass<TruffleLanguage<Object>>;
    /*not mapped: */ sourceContentSupplier(): string;
    /*not mapped: */ storeBytecodeIndexInFrame(): boolean;
    /*not mapped: */ tagTreeNodeLibrary(): KClass<Object>;
    /*not mapped: */ variadicStackLimit(): string;
}