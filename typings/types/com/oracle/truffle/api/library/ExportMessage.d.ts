import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface ExportMessage extends Annotation, Object{
    /*not mapped: */ library(): KClass<Library>;
    /*not mapped: */ limit(): string;
    /*not mapped: */ name(): string;
}