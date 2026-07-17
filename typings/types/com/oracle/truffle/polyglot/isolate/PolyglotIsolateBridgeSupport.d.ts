import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { NativeBridgeSupport } from '../../../../../org/graalvm/jniutils/NativeBridgeSupport.d.ts'
export class PolyglotIsolateBridgeSupport extends Object implements NativeBridgeSupport {
    constructor()
    // private traceLevel: number;
    getFeatureName(): string;
    isTracingEnabled(level: number): boolean;
    trace(message: string): void;
    // private traceLevel(): number;
}