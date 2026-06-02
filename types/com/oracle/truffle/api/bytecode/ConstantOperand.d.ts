import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface ConstantOperand extends Annotation, Object{
    constructor(dimensions: number, javadoc: string, name: string, specifyAtEnd: boolean, type: KClass<Object>)
    /*not mapped: */ dimensions(): number;
    /*not mapped: */ javadoc(): string;
    /*not mapped: */ name(): string;
    /*not mapped: */ specifyAtEnd(): boolean;
    /*not mapped: */ type(): KClass<Object>;
}