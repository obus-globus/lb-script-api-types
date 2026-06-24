import type { RateLimiter } from '../../../com/google/common/util/concurrent/RateLimiter.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class RepeatedNarrator$Params extends Record {
    private constructor(narration: Component, rateLimiter: RateLimiter)
    // private narration: Component;
    // private rateLimiter: RateLimiter;
    equals(o: Object | null): boolean;
    hashCode(): number;
    narration(): Component;
    rateLimiter(): RateLimiter;
    toString(): string;
}