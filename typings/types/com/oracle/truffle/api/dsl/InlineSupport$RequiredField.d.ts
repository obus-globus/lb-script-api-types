import type { InlineSupport$InlinableField } from '../../../../../com/oracle/truffle/api/dsl/InlineSupport$InlinableField.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface InlineSupport$RequiredField extends Annotation, Object{
    /*not mapped: */ bits(): number;
    /*not mapped: */ dimensions(): number;
    /*not mapped: */ type(): KClass<Object>;
    /*not mapped: */ value(): KClass<InlineSupport$InlinableField>;
}