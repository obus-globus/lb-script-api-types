import type { Object } from '../../../java/lang/Object.d.ts'
export interface NativeBridgeSupport extends Object{
    getFeatureName(): string;
    isTracingEnabled(level: number): boolean;
    trace(message: string): void;
}