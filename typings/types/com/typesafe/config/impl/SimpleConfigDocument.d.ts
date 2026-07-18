import type { ConfigParseOptions } from '../../../../com/typesafe/config/ConfigParseOptions.d.ts'
import type { ConfigValue } from '../../../../com/typesafe/config/ConfigValue.d.ts'
import type { ConfigNodeRoot } from '../../../../com/typesafe/config/impl/ConfigNodeRoot.d.ts'
import type { ConfigDocument } from '../../../../com/typesafe/config/parser/ConfigDocument.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleConfigDocument extends Object implements ConfigDocument {
    constructor(arg0: ConfigNodeRoot, arg1: ConfigParseOptions)
    // private configNodeTree: ConfigNodeRoot;
    // private parseOptions: ConfigParseOptions;
    equals(arg0: Object | null): boolean;
    hasPath(arg0: string): boolean;
    hashCode(): number;
    render(): string;
    withValue(arg0: string, arg1: ConfigValue): ConfigDocument;
    withValueText(arg0: string, arg1: string): ConfigDocument;
    withoutPath(arg0: string): ConfigDocument;
}