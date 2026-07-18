import type { ConfigNodeSingleToken } from '../../../../com/typesafe/config/impl/ConfigNodeSingleToken.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
export class ConfigNodeComment extends ConfigNodeSingleToken {
    constructor(arg0: Token)
    commentText(): string;
}