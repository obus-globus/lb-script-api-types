import type { Object } from '../../../java/lang/Object.d.ts'
import type { Platform$DARWIN } from '../../../org/graalvm/nativeimage/Platform$DARWIN.d.ts'
export interface Platform$IOS extends Object, Platform$DARWIN{
    getOS(): string;
}