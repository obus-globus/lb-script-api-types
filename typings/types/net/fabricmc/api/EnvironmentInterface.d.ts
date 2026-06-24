import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KClass as KClass_2 } from '../../../kotlin/reflect/KClass.d.ts'
import type { EnvType } from '../../../net/fabricmc/api/EnvType.d.ts'
export interface EnvironmentInterface extends Annotation, Object{
    constructor(itf: KClass<Object>, value: EnvType)
    /*not mapped: */ itf(): KClass_2<Object>;
    /*not mapped: */ value(): EnvType;
}