import type { DynamicShadowNode$Transformer } from '../../../../eu/pb4/placeholders/api/node/parent/DynamicShadowNode$Transformer.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
export class ParserContext$Key<T extends unknown> extends Record {
    static COMPACT_COMPONENT: ParserContext$Key<boolean>;
    static DEFAULT_SHADOW_STYLER: ParserContext$Key<DynamicShadowNode$Transformer>;
    static HOLDER_LOOKUP: ParserContext$Key<HolderLookup$Provider>;
    static of(paramarg0: string): ParserContext$Key<Object>;
    static of(paramarg0: string, paramarg1: Object | null): ParserContext$Key<Object>;
    static of(paramarg0: string, paramarg1: Class<Object>): ParserContext$Key<Object>;
    static ofNode(paramarg0: string): ParserContext$Key<Object>;
    static ofNode(paramarg0: string, paramarg1: Object | null): ParserContext$Key<Object>;
    static ofNode(paramarg0: string, paramarg1: Class<Object>): ParserContext$Key<Object>;
    // private key: string;
    // private nodeContext: boolean;
    // private type: Class<T>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    key(): string;
    nodeContext(): boolean;
    toString(): string;
    type(): Class<T>;
}