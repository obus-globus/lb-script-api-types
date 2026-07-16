import type { Annotation } from '../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../../kotlin/reflect/KClass.d.ts'
export interface CommandLine$Option extends Annotation, Object{
    /*not mapped: */ arity(): string;
    /*not mapped: */ description(): string[];
    /*not mapped: */ help(): boolean;
    /*not mapped: */ hidden(): boolean;
    /*not mapped: */ names(): string[];
    /*not mapped: */ paramLabel(): string;
    /*not mapped: */ required(): boolean;
    /*not mapped: */ split(): string;
    /*not mapped: */ type(): KClass<Object>[];
    /*not mapped: */ usageHelp(): boolean;
    /*not mapped: */ versionHelp(): boolean;
}