import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$AMD64 } from '../../../org/graalvm/nativeimage/Platform$AMD64.d.ts'
import type { Platform$DARWIN } from '../../../org/graalvm/nativeimage/Platform$DARWIN.d.ts'
export interface Platform$DARWIN_AMD64 extends Object, Platform$AMD64, Platform$DARWIN{
    getArchitecture(): string;
}