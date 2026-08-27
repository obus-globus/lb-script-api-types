import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TagLimiter extends Object{
    bytes(): number;
    checkLevel(arg0: number): void;
    countByte(): void;
    countBytes(arg0: number): void;
    countDouble(): void;
    countFloat(): void;
    countInt(): void;
    countLong(): void;
    countShort(): void;
    countTag(): void;
    maxBytes(): number;
    maxLevels(): number;
    maxTags(): number;
    reset(): void;
    tags(): number;
}