import type { HttpStatusCode } from '../../../../io/ktor/http/HttpStatusCode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class VersionCheckResult extends Enum<VersionCheckResult> {
    static NOT_MODIFIED: VersionCheckResult;
    static OK: VersionCheckResult;
    static PRECONDITION_FAILED: VersionCheckResult;
    static getEntries(): VersionCheckResult[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): VersionCheckResult;
    static values(): VersionCheckResult[];
    private constructor(statusCode: HttpStatusCode)
    readonly statusCode: HttpStatusCode;
    name(): "OK" | "NOT_MODIFIED" | "PRECONDITION_FAILED";
}