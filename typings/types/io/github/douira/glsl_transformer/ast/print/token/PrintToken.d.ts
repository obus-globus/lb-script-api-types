import type { ASTNode } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { TokenRole } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/TokenRole.d.ts'
import type { TokenChannel } from '../../../../../../../io/github/douira/glsl_transformer/token_filter/TokenChannel.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class PrintToken extends Object {
    constructor()
    constructor(arg0: TokenRole)
    constructor(arg0: TokenChannel)
    constructor(arg0: TokenChannel, arg1: TokenRole)
    readonly channel: TokenChannel;
    // private contentCache: string;
    readonly role: TokenRole;
    readonly source: ASTNode;
    calculateContent(): string;
    endsWithNewline(): boolean;
    getChannel(): TokenChannel;
    getContent(): string;
    getRole(): TokenRole;
    getSource(): ASTNode;
    setSource(arg0: ASTNode): void;
}