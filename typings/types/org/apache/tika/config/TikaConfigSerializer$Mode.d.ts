import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TikaConfigSerializer$Mode extends Enum<TikaConfigSerializer$Mode> {
    static CURRENT: TikaConfigSerializer$Mode;
    static MINIMAL: TikaConfigSerializer$Mode;
    static STATIC: TikaConfigSerializer$Mode;
    static STATIC_FULL: TikaConfigSerializer$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TikaConfigSerializer$Mode;
    static values(): TikaConfigSerializer$Mode[];
    private constructor()
    name(): "MINIMAL" | "CURRENT" | "STATIC" | "STATIC_FULL";
}