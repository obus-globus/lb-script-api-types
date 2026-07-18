import type { Platform } from '../../../io/ktor/util/Platform.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class Platform$Jvm extends Platform {
    static INSTANCE: Platform$Jvm;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}