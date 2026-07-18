import type { Object } from '../../../java/lang/Object.d.ts'
import type { Channel } from '../../../kotlinx/coroutines/channels/Channel.d.ts'
export class NonceKt extends Object {
    static ensureNonceGeneratorRunning(): void;
    static getNonceChannel(): Channel<string>;
}