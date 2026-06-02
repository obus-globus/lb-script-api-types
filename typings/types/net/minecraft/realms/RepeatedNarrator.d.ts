import type { Duration } from '../../../java/time/Duration.d.ts'
import type { AtomicReference } from '../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { GameNarrator } from '../../../net/minecraft/client/GameNarrator.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
import type { RepeatedNarrator$Params } from '../../../net/minecraft/realms/RepeatedNarrator$Params.d.ts'
export class RepeatedNarrator extends Object {
    constructor(repeatDelay: Duration)
    // private params: AtomicReference<RepeatedNarrator$Params>;
    // private permitsPerSecond: number;
    narrate(narrator: GameNarrator, narration: Component): void;
}