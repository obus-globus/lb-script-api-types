import type { BooleanSupplier } from '../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { CEntryPoint$Builtin } from '../../../../../org/graalvm/nativeimage/c/function/CEntryPoint$Builtin.d.ts'
import type { CEntryPoint$ExceptionHandler } from '../../../../../org/graalvm/nativeimage/c/function/CEntryPoint$ExceptionHandler.d.ts'
import type { CEntryPoint$Publish } from '../../../../../org/graalvm/nativeimage/c/function/CEntryPoint$Publish.d.ts'
export interface CEntryPoint extends Annotation, Object {
    constructor(builtin: CEntryPoint$Builtin, documentation: string[], exceptionHandler: KClass<CEntryPoint$ExceptionHandler>, include: KClass<() => boolean>, name: string, publishAs: CEntryPoint$Publish)
    /*not mapped: */ builtin(): CEntryPoint$Builtin;
    /*not mapped: */ documentation(): string[];
    /*not mapped: */ exceptionHandler(): KClass<CEntryPoint$ExceptionHandler>;
    /*not mapped: */ include(): KClass<() => boolean>;
    /*not mapped: */ name(): string;
    /*not mapped: */ publishAs(): CEntryPoint$Publish;
}