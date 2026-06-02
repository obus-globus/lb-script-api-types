import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TargetPlatformVersion } from '../../../../../../kotlin/reflect/jvm/internal/impl/platform/TargetPlatformVersion.d.ts'
export abstract class SimplePlatform extends Object {
    // private platformName: string;
    readonly targetPlatformVersion: TargetPlatformVersion;
    getTargetName(): string;
    getTargetPlatformVersion(): TargetPlatformVersion;
    toString(): string;
}