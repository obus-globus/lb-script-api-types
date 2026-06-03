import type { Exception } from '../../../java/lang/Exception.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export interface NotNull extends Annotation, Object{
    constructor(exception: KClass<Exception>, value: string)
    /*not mapped: */ exception(): KClass<Exception>;
    /*not mapped: */ value(): string;
}