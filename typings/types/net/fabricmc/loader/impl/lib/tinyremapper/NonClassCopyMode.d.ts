import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { OutputConsumerPath$ResourceRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/OutputConsumerPath$ResourceRemapper.d.ts'
export class NonClassCopyMode extends Enum<NonClassCopyMode> {
    static FIX_META_INF: NonClassCopyMode;
    static SKIP_META_INF: NonClassCopyMode;
    static UNCHANGED: NonClassCopyMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NonClassCopyMode;
    static values(): (Object | null)[];
    private constructor(...arg2: OutputConsumerPath$ResourceRemapper[])
    remappers: OutputConsumerPath$ResourceRemapper[];
    name(): "UNCHANGED" | "FIX_META_INF" | "SKIP_META_INF";
}