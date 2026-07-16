import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface GenerateLibrary extends Annotation, Object{
    /*not mapped: */ assertions(): KClass<Library>;
    /*not mapped: */ defaultExportLookupEnabled(): boolean;
    /*not mapped: */ dynamicDispatchEnabled(): boolean;
    /*not mapped: */ pushEncapsulatingNode(): boolean;
    /*not mapped: */ receiverType(): KClass<Object>;
}