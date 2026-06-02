import type { Object } from '../../../java/lang/Object.d.ts'
import type { Jdk9Platform } from '../../../okhttp3/internal/platform/Jdk9Platform.d.ts'
export class Jdk9Platform$Companion extends Object {
    // private isAvailable: boolean;
    /*not mapped: */ isAvailable(): boolean;
    readonly majorVersion: number | null;
    buildIfSupported(): Jdk9Platform | null;
}