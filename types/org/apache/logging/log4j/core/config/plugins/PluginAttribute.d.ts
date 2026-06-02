import type { Annotation } from '../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../../kotlin/reflect/KClass.d.ts'
export interface PluginAttribute extends Annotation, Object{
    constructor(defaultBoolean: boolean, defaultByte: number, defaultChar: string, defaultClass: KClass<Object>, defaultDouble: number, defaultFloat: number, defaultInt: number, defaultLong: number, defaultShort: number, defaultString: string, sensitive: boolean, value: string)
    /*not mapped: */ defaultBoolean(): boolean;
    /*not mapped: */ defaultByte(): number;
    /*not mapped: */ defaultChar(): string;
    /*not mapped: */ defaultClass(): KClass<Object>;
    /*not mapped: */ defaultDouble(): number;
    /*not mapped: */ defaultFloat(): number;
    /*not mapped: */ defaultInt(): number;
    /*not mapped: */ defaultLong(): number;
    /*not mapped: */ defaultShort(): number;
    /*not mapped: */ defaultString(): string;
    /*not mapped: */ sensitive(): boolean;
    /*not mapped: */ value(): string;
}