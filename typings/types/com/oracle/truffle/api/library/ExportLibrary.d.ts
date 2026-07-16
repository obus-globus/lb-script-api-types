import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface ExportLibrary extends Annotation, Object{
    /*not mapped: */ delegateTo(): string;
    /*not mapped: */ priority(): number;
    /*not mapped: */ receiverType(): KClass<Object>;
    /*not mapped: */ transitionLimit(): string;
    /*not mapped: */ useForAOT(): boolean;
    /*not mapped: */ useForAOTPriority(): number;
    /*not mapped: */ value(): KClass<Library>;
}