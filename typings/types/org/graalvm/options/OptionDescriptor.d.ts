import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionCategory } from '../../../org/graalvm/options/OptionCategory.d.ts'
import type { OptionDescriptor$Builder } from '../../../org/graalvm/options/OptionDescriptor$Builder.d.ts'
import type { OptionKey } from '../../../org/graalvm/options/OptionKey.d.ts'
import type { OptionStability } from '../../../org/graalvm/options/OptionStability.d.ts'
export class OptionDescriptor extends Object {
    static newBuilder<T extends unknown>(paramkey: OptionKey<T>, paramname: string): OptionDescriptor$Builder;
    constructor(key: OptionKey<Object>, name: string, help: string, category: OptionCategory, stability: OptionStability, deprecated: boolean, deprecationMessage: string, usageSyntax: string)
    readonly category: OptionCategory;
    readonly deprecated: boolean;
    readonly deprecationMessage: string;
    readonly help: string;
    readonly key: OptionKey<Object>;
    readonly name: string;
    readonly stability: OptionStability;
    readonly usageSyntax: string;
    equals(obj: Object | null): boolean;
    getCategory(): OptionCategory;
    getDeprecationMessage(): string;
    getHelp(): string;
    getKey(): OptionKey<Object>;
    getName(): string;
    getStability(): OptionStability;
    getUsageSyntax(): string;
    hashCode(): number;
    isDeprecated(): boolean;
    isOptionMap(): boolean;
    toString(): string;
}