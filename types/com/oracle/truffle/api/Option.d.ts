import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionCategory } from '../../../../org/graalvm/options/OptionCategory.d.ts'
import type { OptionStability } from '../../../../org/graalvm/options/OptionStability.d.ts'
import type { SandboxPolicy } from '../../../../org/graalvm/polyglot/SandboxPolicy.d.ts'
export interface Option extends Annotation, Object{
    constructor(category: OptionCategory, deprecated: boolean, deprecationMessage: string, help: string, name: string, sandbox: SandboxPolicy, stability: OptionStability, usageSyntax: string)
    /*not mapped: */ category(): OptionCategory;
    /*not mapped: */ deprecated(): boolean;
    /*not mapped: */ deprecationMessage(): string;
    /*not mapped: */ help(): string;
    /*not mapped: */ name(): string;
    /*not mapped: */ sandbox(): SandboxPolicy;
    /*not mapped: */ stability(): OptionStability;
    /*not mapped: */ usageSyntax(): string;
}