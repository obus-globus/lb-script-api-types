import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class NoopTagLimiter extends Object implements TagLimiter {
    static DEFAULT_MAX_BYTES: number;
    static DEFAULT_MAX_NESTING_LEVEL: number;
    static create(paramarg0: number, paramarg1: number): TagLimiter;
    static noop(): TagLimiter;
    private constructor()
    bytes(): number;
    checkLevel(arg0: number): void;
    countByte(): void;
    countBytes(arg0: number): void;
    countDouble(): void;
    countFloat(): void;
    countInt(): void;
    countLong(): void;
    countShort(): void;
    maxBytes(): number;
    maxLevels(): number;
    reset(): void;
}