import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionCategory } from '../../../org/graalvm/options/OptionCategory.d.ts'
import type { OptionDescriptor } from '../../../org/graalvm/options/OptionDescriptor.d.ts'
import type { OptionKey } from '../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionStability } from '../../../org/graalvm/options/OptionStability.d.ts'
export class OptionDescriptor$Builder extends Object {
    constructor(null_: OptionDescriptor$Builder, name: string)
    // private category: OptionCategory;
    // private deprecated: boolean;
    // private deprecationMessage: string;
    // private help: string;
    // private key: OptionKey<Object>;
    // private name: string;
    // private stability: OptionStability;
    // private usageSyntax: string;
    build(): OptionDescriptor;
    category(category: OptionCategory): OptionDescriptor$Builder;
    deprecated(deprecated: boolean): OptionDescriptor$Builder;
    deprecationMessage(deprecationMessage: string): OptionDescriptor$Builder;
    help(help: string): OptionDescriptor$Builder;
    stability(stability: OptionStability): OptionDescriptor$Builder;
    usageSyntax(usageSyntax: string): OptionDescriptor$Builder;
}