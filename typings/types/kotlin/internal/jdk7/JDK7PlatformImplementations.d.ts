import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { PlatformImplementations } from '../../../kotlin/internal/PlatformImplementations.d.ts'
export class JDK7PlatformImplementations extends PlatformImplementations {
    constructor()
    addSuppressed(cause: Throwable, exception: Throwable): void;
    getSuppressed(exception: Throwable): Throwable[];
    // private sdkIsNullOrAtLeast(version: number): boolean;
}