import type { AutoCloseable } from '../../../../../java/lang/AutoCloseable.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MCEFDirectTexture } from '../../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFDirectTexture.d.ts'
export class WindowsAcceleratedPaintBackend$SharedTextureEntry extends Record implements AutoCloseable {
    // private directTexture: MCEFDirectTexture;
    // private height: number;
    // private width: number;
    close(): void;
    directTexture(): MCEFDirectTexture;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    height(): number;
    // private matches(arg0: number, arg1: number): boolean;
    toString(): string;
    width(): number;
}