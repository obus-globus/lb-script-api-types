import type { ShortCircuitOperation$Operator } from '../../../../../com/oracle/truffle/api/bytecode/ShortCircuitOperation$Operator.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface ShortCircuitOperation extends Annotation, Object{
    /*not mapped: */ booleanConverter(): KClass<Object>;
    /*not mapped: */ javadoc(): string;
    /*not mapped: */ name(): string;
    /*not mapped: */ operator(): ShortCircuitOperation$Operator;
}