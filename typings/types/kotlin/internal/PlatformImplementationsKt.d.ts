import type { Object } from '../../java/lang/Object.d.ts'
import type { PlatformImplementations } from '../../kotlin/internal/PlatformImplementations.d.ts'
export class PlatformImplementationsKt extends Object {
    static IMPLEMENTATIONS: PlatformImplementations;
    static apiVersionIsAtLeast(major: number, minor: number, patch: number): boolean;
}