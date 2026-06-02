import type { TruffleLanguage } from '../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface GenerateBytecode extends Annotation, Object{
    constructor(additionalAssertions: boolean, allowUnsafe: boolean, boxingEliminationTypes: KClass<Object>[], defaultLocalValue: string, defaultUncachedThreshold: string, enableBlockScoping: boolean, enableBytecodeDebugListener: boolean, enableMaterializedLocalAccesses: boolean, enableQuickening: boolean, enableRootBodyTagging: boolean, enableRootTagging: boolean, enableSerialization: boolean, enableSpecializationIntrospection: boolean, enableTagInstrumentation: boolean, enableUncachedInterpreter: boolean, enableYield: boolean, languageClass: KClass<TruffleLanguage<Object>>, storeBytecodeIndexInFrame: boolean, tagTreeNodeLibrary: KClass<Object>, variadicStackLimit: string)
    /*not mapped: */ additionalAssertions(): boolean;
    /*not mapped: */ allowUnsafe(): boolean;
    /*not mapped: */ boxingEliminationTypes(): KClass<Object>[];
    /*not mapped: */ defaultLocalValue(): string;
    /*not mapped: */ defaultUncachedThreshold(): string;
    /*not mapped: */ enableBlockScoping(): boolean;
    /*not mapped: */ enableBytecodeDebugListener(): boolean;
    /*not mapped: */ enableMaterializedLocalAccesses(): boolean;
    /*not mapped: */ enableQuickening(): boolean;
    /*not mapped: */ enableRootBodyTagging(): boolean;
    /*not mapped: */ enableRootTagging(): boolean;
    /*not mapped: */ enableSerialization(): boolean;
    /*not mapped: */ enableSpecializationIntrospection(): boolean;
    /*not mapped: */ enableTagInstrumentation(): boolean;
    /*not mapped: */ enableUncachedInterpreter(): boolean;
    /*not mapped: */ enableYield(): boolean;
    /*not mapped: */ languageClass(): KClass<TruffleLanguage<Object>>;
    /*not mapped: */ storeBytecodeIndexInFrame(): boolean;
    /*not mapped: */ tagTreeNodeLibrary(): KClass<Object>;
    /*not mapped: */ variadicStackLimit(): string;
}