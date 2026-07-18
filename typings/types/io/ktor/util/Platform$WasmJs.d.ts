import type { Platform } from '../../../io/ktor/util/Platform.d.ts'
import type { Platform$JsPlatform } from '../../../io/ktor/util/Platform$JsPlatform.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Platform$WasmJs extends Platform {
    constructor(jsPlatform: Platform$JsPlatform)
    readonly jsPlatform: Platform$JsPlatform;
    component1(): Platform$JsPlatform;
    copy(jsPlatform: Platform$JsPlatform): Platform$WasmJs;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}