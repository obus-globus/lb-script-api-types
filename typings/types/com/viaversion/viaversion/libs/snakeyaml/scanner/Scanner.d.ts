import type { Token } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token.d.ts'
import type { Token$ID } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/tokens/Token$ID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Scanner extends Object{
    checkToken(arg0: Token$ID): boolean;
    checkToken(...arg0: Token$ID[]): boolean;
    getToken(): Token;
    peekToken(): Token;
    resetDocumentIndex(): void;
}