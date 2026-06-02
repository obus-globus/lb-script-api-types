import type { ConscryptPlatform$Companion } from '../../../okhttp3/internal/platform/ConscryptPlatform$Companion.d.ts'
import type { Platform } from '../../../okhttp3/internal/platform/Platform.d.ts'
import type { Platform$Companion } from '../../../okhttp3/internal/platform/Platform$Companion.d.ts'
export class ConscryptPlatform extends Platform {
    static Companion: ConscryptPlatform$Companion;
    static Companion: Platform$Companion;
    static INFO: number;
    static WARN: number;
    static get(): Platform;
    private constructor()
}