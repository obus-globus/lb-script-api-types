import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface TargetClass extends Annotation, Object {
    /*not mapped: */ className(): string;
    /*not mapped: */ classNameProvider(): KClass<(param0: TargetClass) => string>;
    /*not mapped: */ innerClass(): string[];
    /*not mapped: */ onlyWith(): KClass<Object>[];
    /*not mapped: */ value(): KClass<Object>;
}