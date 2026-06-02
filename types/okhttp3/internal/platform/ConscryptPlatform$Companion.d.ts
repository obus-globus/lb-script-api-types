import type { Object } from '../../../java/lang/Object.d.ts'
import type { ConscryptPlatform } from '../../../okhttp3/internal/platform/ConscryptPlatform.d.ts'
export class ConscryptPlatform$Companion extends Object {
    // private isSupported: boolean;
    /*not mapped: */ isSupported(): boolean;
    atLeastVersion(major: number, minor: number, patch: number): boolean;
    buildIfSupported(): ConscryptPlatform | null;
}