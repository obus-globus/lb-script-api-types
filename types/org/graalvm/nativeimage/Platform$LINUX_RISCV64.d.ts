import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$LINUX } from '../../../org/graalvm/nativeimage/Platform$LINUX.d.ts'
import type { Platform$RISCV64 } from '../../../org/graalvm/nativeimage/Platform$RISCV64.d.ts'
export class Platform$LINUX_RISCV64 extends Object implements Platform$LINUX, Platform$RISCV64 {
    static PLATFORM_PROPERTY_NAME: string;
    constructor()
    getArchitecture(): string;
    getOS(): string;
}