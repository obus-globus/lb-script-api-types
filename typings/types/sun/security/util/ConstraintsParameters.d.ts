import type { Key } from '../../../java/security/Key.d.ts'
import type { Date } from '../../../java/util/Date.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface ConstraintsParameters extends Object{
    anchorIsJdkCA(): boolean;
    extendedExceptionMsg(): string;
    getDate(): Date;
    getKeys(): Key[];
    getVariant(): string;
}