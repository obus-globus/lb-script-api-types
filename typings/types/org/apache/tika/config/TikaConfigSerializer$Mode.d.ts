import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TikaConfigSerializer$Mode extends Enum<TikaConfigSerializer$Mode> {
    static CURRENT: TikaConfigSerializer$Mode;
    static MINIMAL: TikaConfigSerializer$Mode;
    static STATIC: TikaConfigSerializer$Mode;
    static STATIC_FULL: TikaConfigSerializer$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TikaConfigSerializer$Mode;
    static values(): (Object | null)[];
    private constructor()
    name(): "MINIMAL" | "CURRENT" | "STATIC" | "STATIC_FULL";
}