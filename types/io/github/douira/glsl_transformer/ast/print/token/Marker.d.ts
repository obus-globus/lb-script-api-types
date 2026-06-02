import type { PrintToken } from '../../../../../../../io/github/douira/glsl_transformer/ast/print/token/PrintToken.d.ts'
export class Marker extends PrintToken {
    constructor()
    calculateContent(): string;
    endsWithNewline(): boolean;
    getContent(): string;
}