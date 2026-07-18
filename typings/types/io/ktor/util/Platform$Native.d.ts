import type { Platform } from '../../../io/ktor/util/Platform.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Platform$Native extends Platform {
    static INSTANCE: Platform$Native;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}