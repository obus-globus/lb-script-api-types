import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { KClass } from '../../../../../../kotlin/reflect/KClass.d.ts'
export interface FromLibGraalEntryPointsResolver extends Annotation, Object{
    constructor(entryPointsClassName: string, value: KClass<Enum<any>>)
    /*not mapped: */ entryPointsClassName(): string;
    /*not mapped: */ value(): KClass<Enum<any>>;
}