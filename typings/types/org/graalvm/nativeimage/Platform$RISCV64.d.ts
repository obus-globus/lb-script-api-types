import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform } from '../../../org/graalvm/nativeimage/Platform.d.ts'
export interface Platform$RISCV64 extends Object, Platform{
    getArchitecture(): string;
    getOS(): string;
}