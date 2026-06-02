import type { Token } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Token.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface WritableToken extends Token, Object{
    setTokenIndex(arg0: number): void;
}