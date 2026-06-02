import type { Object } from '../../../java/lang/Object.d.ts'
export class InlineMarker extends Object {
    static afterInlineCall(): void;
    static beforeInlineCall(): void;
    static finallyEnd(paramarg0: number): void;
    static finallyStart(paramarg0: number): void;
    static mark(paramarg0: number): void;
    static mark(paramarg0: string): void;
    constructor()
}