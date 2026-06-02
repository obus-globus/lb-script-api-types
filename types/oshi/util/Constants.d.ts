import type { OffsetDateTime } from '../../java/time/OffsetDateTime.d.ts'
import type { Pattern } from '../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Constants extends Object {
    static DIGITS: Pattern;
    static UNIX_EPOCH: OffsetDateTime;
    static UNKNOWN: string;
    private constructor()
}