import type { ConfigException } from '../../../../com/typesafe/config/ConfigException.d.ts'
import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { ConfigSyntax } from '../../../../com/typesafe/config/ConfigSyntax.d.ts'
import type { AbstractConfigNode } from '../../../../com/typesafe/config/impl/AbstractConfigNode.d.ts'
import type { AbstractConfigNodeValue } from '../../../../com/typesafe/config/impl/AbstractConfigNodeValue.d.ts'
import type { ConfigNodeComplexValue } from '../../../../com/typesafe/config/impl/ConfigNodeComplexValue.d.ts'
import type { ConfigNodeInclude } from '../../../../com/typesafe/config/impl/ConfigNodeInclude.d.ts'
import type { ConfigNodePath } from '../../../../com/typesafe/config/impl/ConfigNodePath.d.ts'
import type { ConfigNodeRoot } from '../../../../com/typesafe/config/impl/ConfigNodeRoot.d.ts'
import type { Path } from '../../../../com/typesafe/config/impl/Path.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ConfigDocumentParser$ParseContext extends Object {
    constructor(arg0: ConfigSyntax, arg1: ConfigOrigin, arg2: Iterator<Token>)
    // private ExpectingClosingParenthesisError: string;
    // private baseOrigin: ConfigOrigin;
    // private buffer: Token[];
    // private equalsCount: number;
    // private flavor: ConfigSyntax;
    // private lineNumber: number;
    // private tokens: Iterator<Token>;
    // private addQuoteSuggestion(arg0: Path, arg1: boolean, arg2: string, arg3: string): string;
    // private addQuoteSuggestion(arg0: string, arg1: string): string;
    // private checkElementSeparator(arg0: AbstractConfigNode[]): boolean;
    // private consolidateValues(arg0: AbstractConfigNode[]): AbstractConfigNodeValue;
    // private isKeyValueSeparatorToken(arg0: Token): boolean;
    // private nextToken(): Token;
    // private nextTokenCollectingWhitespace(arg0: AbstractConfigNode[]): Token;
    parse(): ConfigNodeRoot;
    // private parseArray(): ConfigNodeComplexValue;
    // private parseError(arg0: string): ConfigException;
    // private parseError(arg0: string, arg1: Throwable): ConfigException;
    // private parseInclude(arg0: AbstractConfigNode[]): ConfigNodeInclude;
    // private parseIncludeResource(arg0: AbstractConfigNode[], arg1: boolean): ConfigNodeInclude;
    // private parseKey(arg0: Token): ConfigNodePath;
    // private parseObject(arg0: boolean): ConfigNodeComplexValue;
    parseSingleValue(): AbstractConfigNodeValue;
    // private parseValue(arg0: Token): AbstractConfigNodeValue;
    // private popToken(): Token;
    // private putBack(arg0: Token): void;
}