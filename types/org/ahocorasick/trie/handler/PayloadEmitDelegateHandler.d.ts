import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PayloadEmit } from '../../../../org/ahocorasick/trie/PayloadEmit.d.ts'
import type { EmitHandler } from '../../../../org/ahocorasick/trie/handler/EmitHandler.d.ts'
import type { PayloadEmitHandler } from '../../../../org/ahocorasick/trie/handler/PayloadEmitHandler.d.ts'
export class PayloadEmitDelegateHandler extends Object implements PayloadEmitHandler<string> {
    constructor(arg0: EmitHandler)
    // private handler: EmitHandler;
    emit(arg0: PayloadEmit<string>): boolean;
}