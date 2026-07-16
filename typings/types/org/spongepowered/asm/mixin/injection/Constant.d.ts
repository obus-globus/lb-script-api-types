import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { Constant$Condition } from '../../../../../org/spongepowered/asm/mixin/injection/Constant$Condition.d.ts'
export interface Constant extends Annotation, Object{
    /*not mapped: */ classValue(): KClass<Object>;
    /*not mapped: */ doubleValue(): number;
    /*not mapped: */ expandZeroConditions(): Constant$Condition[];
    /*not mapped: */ floatValue(): number;
    /*not mapped: */ intValue(): number;
    /*not mapped: */ log(): boolean;
    /*not mapped: */ longValue(): number;
    /*not mapped: */ nullValue(): boolean;
    /*not mapped: */ ordinal(): number;
    /*not mapped: */ slice(): string;
    /*not mapped: */ stringValue(): string;
}