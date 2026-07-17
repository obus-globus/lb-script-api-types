import type { TagLimiter } from '../../../../com/viaversion/nbt/limiter/TagLimiter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TagLimiterImpl extends Object implements TagLimiter {
    static DEFAULT_MAX_BYTES: number;
    static DEFAULT_MAX_NESTING_LEVEL: number;
    constructor(arg0: number, arg1: number)
    // private bytes: number;
    // private maxBytes: number;
    // private maxLevels: number;
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