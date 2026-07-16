import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CompressedNbt$MissingSeverity extends Enum<CompressedNbt$MissingSeverity> {
    static IMPORTANT: CompressedNbt$MissingSeverity;
    static MINOR: CompressedNbt$MissingSeverity;
    static NEUTRAL: CompressedNbt$MissingSeverity;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CompressedNbt$MissingSeverity;
    static values(): CompressedNbt$MissingSeverity[];
    private constructor(logFunction: (param0: string, param1: Object) => void)
    // private logFunction: (param0: string, param1: Object) => void;
    log(message: string, path: Path): void;
    name(): "IMPORTANT" | "NEUTRAL" | "MINOR";
}